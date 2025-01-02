<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::middleware(['web', 'check.password'])
    ->group(
        function () {
            Route::controller(PostController::class)
                ->group(
                    function () {
                        Route::get('/', 'index')->name('home');
                    }
                );
        }
    );

require __DIR__ . '/auth.php';
require __DIR__.'/socialstream.php';