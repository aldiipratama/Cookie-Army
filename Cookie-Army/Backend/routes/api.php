<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('users')->controller(UserController::class)->group(function () {
    Route::get('/', 'index');
    Route::get('/{id}', 'show');
    Route::patch('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

<<<<<<< HEAD
Route::get('/posts', [PostController::class, 'index']);

Route::get('/stories', [StoryController::class, 'getAllStories']);
=======
Route::prefix('posts')->controller(PostController::class)->group(function () {
    Route::get('/', 'index');
    Route::get('/{id}', 'show');
    Route::patch('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});
>>>>>>> 2a1f5d0e5456ee723c55fcd25453c419bdc5e5b5
