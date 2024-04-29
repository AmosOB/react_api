<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

Route::get('books', [BookController::class, 'index']);
Route::get('books/{book}', [BookController::class, 'show']);
Route::post('books', [BookController::class, 'store']);
Route::put('update/{book}', [BookController::class, 'update']);
Route::delete('delete/{book}', [BookController::class, 'destroy']);
