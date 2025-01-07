<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Story;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy("created_at","desc")->with('users')->paginate(10);
        $stories = Story::orderBy('created_at','desc')->with('users')->paginate(10);
        
        return \Inertia\Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'hasHome' => Route::has('home'),
            'dataPosts' => $posts,
            'dataStories' => $stories
        ]);
    }
}
