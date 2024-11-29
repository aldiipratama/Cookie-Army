<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        // $failedAttempts = session('failed_attempts', 0);

        // if ($failedAttempts >= 3) {
        //     return redirect()->back()->withErrors([
        //         'error' => 'Akun Anda diblokir setelah 3 kali mencoba login dengan salah. Silakan reset password.'
        //     ]);
        // }

        // if ($request->authenticate()) {
        //     session()->forget('failed_attempts');
        //     $request->session()->regenerate();
        //     return redirect()->intended(route('home', absolute: false));
        // } else {
        //     $failedAttempts++;
        //     session(['failed_attempts' => $failedAttempts]);

        //     if ($failedAttempts == 2) {
        //         return redirect()->back()->withErrors([
        //             'error' => 'Anda sudah salah password 2 kali. Silakan reset password jika Anda lupa.'
        //         ]);
        //     }

        //     return redirect()->back()->withErrors([
        //         'error' => 'Login gagal. Silakan coba lagi.'
        //     ]);
        // }

        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('home', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
