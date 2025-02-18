<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return \Inertia\Inertia::render('auth/dashboard/index');
    }

    public function posts()
    {
        $posts = Post::orderBy('created_at','desc')->paginate(10);
        return \Inertia\Inertia::render('auth/dashboard/posts/index', [
            'posts' => $posts
        ]);
    }

    public function users()
    {
        $users = User::orderBy('created_at','desc')->paginate(10);
        return \Inertia\Inertia::render('auth/dashboard/users/index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function deletePost(string $id)
    {
        Post::destroy($id);

        return redirect()->route('dashboard.posts')->with('success','Delete Post Success');
    }

    public function deleteUser(string $id)
    {
        User::destroy($id);

        return redirect()->route('dashboard.users')->with('success','Delete User Success');
    }
}
