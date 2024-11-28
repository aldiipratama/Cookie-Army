<?php

namespace App\Http\Controllers;

use App\Models\Relationship;
use App\Http\Requests\StoreRelationshipRequest;
use App\Http\Requests\UpdateRelationshipRequest;
use Illuminate\Support\Facades\DB;

class RelationshipController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $relationships = DB::table('relationships')->get();

    return $relationships;
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
  public function store(StoreRelationshipRequest $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(Relationship $relationship)
  {
    $relationship = DB::table('relationships')->where('id', $relationship->id)->get();

    return $relationship;
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Relationship $relationship)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(UpdateRelationshipRequest $request, Relationship $relationship)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Relationship $relationship)
  {
    //
  }
}
