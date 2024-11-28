<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RelationshipController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SharePostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/posts')->group(function () {
  Route::get('/', [PostController::class, 'index'])->name('getAllPosts');
  Route::get('/{id}', [PostController::class, 'show'])->name("getPostsById");
});

Route::prefix('/users')->group(function () {
  Route::prefix('/relationships')->group(function () {
    Route::get('/', [RelationshipController::class, 'index'])->name('getAllRelationships');
    Route::get('/{id}', [RelationshipController::class, 'show'])->name("getRelationsById");
  });

  Route::get('/', [UserController::class, 'index'])->name('getAllUsers');
  Route::get('/{id}', [UserController::class, 'show'])->name('getUsersById');
});

Route::prefix('/roles')->group(function () {
  Route::get('/', [RoleController::class, 'index'])->name("getAllRoles");
  Route::get('/{id}', [RoleController::class, 'show'])->name("getRolesById");
});

Route::prefix('/comments')->group(function () {
  Route::get('/', [CommentController::class, 'index'])->name("getAllComments");
  Route::get('/{id}', [CommentController::class, 'show'])->name("getCommentsById");
});

Route::prefix('/likes')->group(function () {
  Route::get('/', [LikeController::class, 'index'])->name('getAllLikes');
  Route::get('/{id}', [LikeController::class, 'show'])->name("getLikeById");
});

Route::prefix('/share_posts')->group(function () {
  Route::get('/', [SharePostController::class, 'index'])->name('getAllSharePosts');
  Route::get('/{id}', [SharePostController::class, 'show'])->name("getSharePostsById");
})->middleware('auth');
