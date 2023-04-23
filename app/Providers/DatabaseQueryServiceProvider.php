<?php

namespace App\Providers;

use Carbon\Carbon;
use DateTime;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Event;
use Illuminate\Database\Events\TransactionBeginning;
use Illuminate\Database\Events\TransactionCommitted;
use Illuminate\Database\Events\TransactionRolledBack;

class DatabaseQueryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
        if (config('logging.sql.enable') !== true) {
            return;
        }

        DB::listen(static function ($query): void {
            $sql = $query->sql;

            foreach ($query->bindings as $binding) {
                if (is_string($binding)) {
                    $binding = "'{$binding}'";
                } elseif (is_bool($binding)) {
                    $binding = $binding ? '1' : '0';
                } elseif (is_int($binding)) {
                    $binding = (string)$binding;
                } elseif (is_float($binding)) {
                    $binding = (string)$binding;
                } elseif ($binding === null) {
                    $binding = 'NULL';
                } elseif ($binding instanceof Carbon) {
                    $binding = "'{$binding->toDateTimeString()}'";
                } elseif ($binding instanceof DateTime) {
                    $binding = "'{$binding->format('Y-m-d H:i:s')}'";
                }

                $sql = preg_replace('/\\?/', $binding, $sql, 1);
            }

            Log::debug('SQL', ['sql' => $sql, 'time' => "{$query->time} ms"]);
        });

        Event::listen(TransactionBeginning::class, static function (TransactionBeginning $event): void {
            Log::debug('START TRANSACTION');
        });

        Event::listen(TransactionCommitted::class, static function (TransactionCommitted $event): void {
            Log::debug('COMMIT');
        });

        Event::listen(TransactionRolledBack::class, static function (TransactionRolledBack $event): void {
            Log::debug('ROLLBACK');
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
