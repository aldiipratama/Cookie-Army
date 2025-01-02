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
Route::get('/pdfs/{filename}', 'PdfReportPost@show')->middleware('auth');


require __DIR__ . '/auth.php';
require __DIR__.'/socialstream.php';
