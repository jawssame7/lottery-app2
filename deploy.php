<?php
namespace Deployer;

require 'recipe/laravel.php';

// Config

set('repository', 'git@github.com:jawssame7/lottery-app.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts
import(__DIR__ . '/hosts.yaml');

//host('conoha-deployer')
//    ->setLabels([
//        'env' => 'prod'
//    ])
//    ->set('remote_user', 'deployer')
//    ->set('deploy_path', '~/workspace/lottery-app')
//    ->set('branch', 'master')
//    ->set('writable_mode', 'chmod');

// front build task
task('deploy:front-build', function () {
    cd('{{release_path}}');
    run('npm install');
    run('npm run build');
});

//
task('deploy:storage-chmod', function () {
    cd('{{release_path}}');
    run('sudo chmod 777 -R ./storage');
});

// Hooks
after('deploy:update_code', 'deploy:front-build');
after('deploy:symlink', 'deploy:storage-chmod');

after('deploy:failed', 'deploy:unlock');
