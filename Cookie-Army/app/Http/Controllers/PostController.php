<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Like;
use App\Models\Post;
use App\Models\Story;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy("created_at","desc")->paginate(10);
        $stories = Story::orderBy('created_at','desc')->with('users')->paginate(10);

        return \Inertia\Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'dataPosts' => $posts,
            'dataStories' => $stories,
        ]);
    }
}
