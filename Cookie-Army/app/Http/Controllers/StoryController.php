<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;

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
}
