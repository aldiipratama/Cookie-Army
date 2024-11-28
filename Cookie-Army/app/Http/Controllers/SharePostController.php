<?php

namespace App\Http\Controllers;

use App\Models\SharePost;
use App\Http\Requests\StoreSharePostRequest;
use App\Http\Requests\UpdateSharePostRequest;
use Illuminate\Support\Facades\DB;

class SharePostController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $sharePosts = DB::table('share_posts')->get();

    return $sharePosts;
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
  public function store(StoreSharePostRequest $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(SharePost $sharePost)
  {
    $share = DB::table('share_posts')->where('id', $sharePost->id)->get();

    return $share;
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(SharePost $sharePost)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(UpdateSharePostRequest $request, SharePost $sharePost)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(SharePost $sharePost)
  {
    //
  }
}
