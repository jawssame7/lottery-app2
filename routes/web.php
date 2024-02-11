<?php

use App\Http\Controllers\Loto6Controller;
use App\Http\Controllers\Loto7Controller;
use App\Http\Controllers\MinilotoController;
use App\Http\Controllers\AdminLoginController;
use Inertia\Inertia;

//use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/', function () {
//    return view('app');
//    return Inertia::render('Welcome');
    return Inertia::location('/loto6');
});

//Route::get('/miniloto', function () {
////    return view('app');
//    return Inertia::render('MiniLoto');
//});

Route::get('loto6', [Loto6Controller::class, 'index']);
Route::get('/create-loto6', [Loto6Controller::class, 'create']);

Route::get('loto7', [Loto7Controller::class, 'index']);
Route::get('/create-loto7', [Loto7Controller::class, 'create']);

Route::get('miniloto', [MinilotoController::class, 'index']);
Route::get('/create-miniLoto', [MinilotoController::class, 'create']);

//Route::get('/create-loto6', function () {
//    return Inertia::render('CreateLoto');
//});

//Route::get('/create-loto7', function () {
//    return Inertia::render('CreateLoto7');
//});
//
//Route::get('/create-miniLoto', function () {
//    return Inertia::render('CreateMiniLoto');
//});

Route::get('/admin-login', function () {
    return Inertia::render('AdminLogin');
});

Route::get('/import-loto6', function () {
    return Inertia::render('ImportLoto6');
});

Route::get('/import-loto7', function () {
    return Inertia::render('ImportLoto7');
});

Route::get('/import-miniLoto', function () {
    return Inertia::render('ImportMiniLoto');
});

Route::post('/loto6/store', [Loto6Controller::class, 'store']);
Route::post('/loto7/store', [Loto7Controller::class, 'store']);
Route::post('/miniloto/store', [MinilotoController::class, 'store']);
Route::post('/admin-login', [AdminLoginController::class, 'login']);
Route::post('/admin-logout', [AdminLoginController::class, 'logout']);
Route::post('/admin-import', [AdminLoginController::class, 'import']);
