<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StoryController extends Controller
{
    public function index(Request $request)
    {
        $story = Story::all();

        if (!$story) {
            return response()->json([
                "error" => [
                    "message" => "Data All User in Database Not Found !",
                    "status_code" => 404
                ]
            ], 404);
        }

        return response()->json([
            "data" => $story,
            "status_code" => 200
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validated();

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        }

        $post = Story::create([
            'caption' => $request->caption,
            'image' => $imageName,
            'user_id' => Auth::user()->id,
        ]);

        return response()->json(['message' => 'Post created successfully'], 201);
    }
}
