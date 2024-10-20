<?php

use App\Http\Controllers\API\MenuController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/menu', [MenuController::class, 'index']);
Route::get('/menu/show/{id}', [MenuController::class, 'show']);
Route::delete('/menu/delete/{id}', [MenuController::class, 'destroy']);
Route::post('/menu/store', [MenuController::class, 'store']);
Route::patch('/menu/update/{id}', [MenuController::class, 'update']);
