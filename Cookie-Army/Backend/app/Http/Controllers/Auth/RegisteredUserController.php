<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterRequest $request)
    {
        $validatedData = $request->validated();
        $validatedData['roleId'] = $validatedData['roleId'] ?? 3;
        $user = User::create([
            'firstname' => $validatedData['firstname'],
            'lastname' => $validatedData['lastname'],
            'username' => $validatedData['username'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'roleId' => $validatedData['roleId'],
        ]);

        event(new Registered($user));

        return response()->noContent();
    }
}
