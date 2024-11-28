<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Http\Requests\StoreLikeRequest;
use App\Http\Requests\UpdateLikeRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LikeController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $likes = DB::table('likes')->get();

    return $likes;
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
  public function store(StoreLikeRequest $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(Request $request)
  {
    $like = DB::table('likes')->where('id', $request->id)->get();

    return $like;
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Like $like)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(UpdateLikeRequest $request, Like $like)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Like $like)
  {
    //
  }
}
