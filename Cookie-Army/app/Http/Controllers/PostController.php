<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostUpdateRequest;
use Illuminate\Http\Request;
use App\Models\Post;

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
            'user_id' => auth()->user()->id,
        ]);

        return response()->json(['message' => 'Post created successfully'], 201);
    }

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

}
