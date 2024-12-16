<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;

class StoryController extends Controller
{
    public function getAllStories()
    {
        $story = Story::all();
        return response()->json([
            'data' => $story,
            'status_code' => 200
        ], 200);
    }
}
