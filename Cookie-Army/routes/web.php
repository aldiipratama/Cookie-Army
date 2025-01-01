<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::middleware(['web'])
    ->group(
        function () {
            Route::controller(HomeController::class)
                ->group(
                    function () {
                        Route::get('/', 'index')->name('home');
                    }
                );
        }
    );

    Route::get("anime",function(){
        return Inertia\Inertia::render("anime/index");
        
    });
require __DIR__ . '/auth.php';
require __DIR__.'/socialstream.php';
