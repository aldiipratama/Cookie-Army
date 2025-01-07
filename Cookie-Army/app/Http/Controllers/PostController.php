<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use App\Models\Post;
use App\Models\Story;
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
=======
use App\Http\Requests\PostUpdateRequest;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $post = Post::all();

        if (!$post) {
            return response()->json([
                "error" => [
                    "message" => "Data All User in Database Not Found !",
                    "status_code" => 404
                ]
            ], 404);
        }


        return response()->json([
            "data" => $post,
            "status_code" => 200
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validated();

        if ($request->hasFile('image')) {
            $imageName = time().'.'.$request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        }

       $post = Post::create([
            'music' => $request->music,
            'image' => $imageName,
            'description' => $request->description,
            'user_id' => Auth::user()->id,
        ]);

        return response()->json(['message' => 'Post created successfully'],201);}

    public function show(Request $request)
    {
        $post = Post::findOrFail($request->id);

        if (!$post) {
            return response([
                "error" => [
                    "message" => "Data User by Id in Database Not Found!",
                    "status_code" => 404
                ]
            ], 404);
        }

        return response()->json([
            'data' => $post,
            'status_code' => 200
        ], 200);
    }


    public function update(PostUpdateRequest $request, Post $post)
    {
        $data = $post->findOrFail($request->id);
        $data->update($request->validated());

        return response()->json([
            "data" => $data,
            "status_code" => 201
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->findOrFail(request()->id)->delete();

        return response()->noContent();
    }

>>>>>>> origin/backend_dicky
}
