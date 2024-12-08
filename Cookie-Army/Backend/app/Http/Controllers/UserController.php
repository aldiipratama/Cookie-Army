<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = User::all();

        if (!$user) {
            return response()->json([
                "error" => [
                    "message" => "Data All User in Database Not Found !",
                    "status_code" => 404
                ]
            ], 404);
        }

        if ($request->query("email")) {
            $email = $request->query("email");
            $user = User::where("email", $email)->first();

            if (!$user) {
                return response()->json([
                    "error" => [
                        "message" => "Data User by Email in Database Not Found!",
                        "status_code" => 404
                    ]
                ], 404);
            }

            return response()->json($user, 200);
        }

        return response()->json([
            "data" => $user,
            "status_code" => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $user = User::findOrFail($request->id);

        if (!$user) {
            return response([
                "error" => [
                    "message" => "Data User by Id in Database Not Found!",
                    "status_code" => 404
                ]
            ], 404);
        }

        return response()->json([
            'data' => $user,
            'status_code' => 200
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        $data = $user->findOrFail($request->id);
        $data->update($request->validated());

        return response()->json([
            "data" => $data,
            "status_code" => 201
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->findOrFail(request()->id)->delete();

        return response()->noContent();
    }
}
