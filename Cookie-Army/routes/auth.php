<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')
    ->group(
        function () {
            Route::get('register', [RegisteredUserController::class, 'create'])
                ->name('register');

            Route::post('register', [RegisteredUserController::class, 'store']);

            Route::controller(AuthenticatedSessionController::class)->group(
                function () {
                    Route::get('login', 'create')
                        ->name('login');
                    Route::post('login', 'store');
                }
            );

            Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
                ->name('password.request');

            Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
                ->name('password.email');

            Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
                ->name('password.reset');

            Route::post('reset-password', [NewPasswordController::class, 'store'])
                ->name('password.store');
        }
    );

Route::middleware('auth')
    ->group(
        function () {
            Route::prefix('profile')
                ->controller(ProfileController::class)
                ->group(
                    function () {
                        Route::get('/', 'index')->name('profile.edit');
                        Route::patch('/', 'update')->name('profile.update');
                        Route::patch('/bio/edit', 'editBio')->name('edit.bio');
                        Route::patch('/bio/delete', 'deleteBio')->name('delete.bio');
                        Route::delete('/', 'destroy')->name('profile.destroy');
                    }
                );

            Route::get(
                'chat',
                function () {
                    return \Inertia\Inertia::render('auth/chat/index');
                }
            )->name('chat');

            Route::get('verify-email', EmailVerificationPromptController::class)
                ->name('verification.notice');

            Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1'])
                ->name('verification.verify');

            Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('verification.send');

            Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
                ->name('password.confirm');

            Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

            Route::put('password', [PasswordController::class, 'update'])->name('password.update');

            Route::controller(AuthenticatedSessionController::class)
                ->group(function () {
                    Route::post('logout', 'destroy')->name('logout');
                    Route::get('set-password', 'setPassword')->name('auth.set-password');
                    Route::patch('set-password', 'createPassword')->name('auth.create-password');
                });
        }
    );

Route::middleware(['auth', 'verified', 'admin'])
    ->group(
        function () {
            Route::controller(DashboardController::class)
                ->group(
                    function () {
                        Route::get('dashboard', 'index')->name('dashboard');
                    }
                );
        }
    );
