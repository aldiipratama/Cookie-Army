<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoleController extends Controller
{
    public function index()
    {
        $roles = DB::table('roles')->get();

        return $roles;
    }

    public function show(Request $request)
    {
        $role = DB::table('roles')->where('id', $request->id)->get();

        return $role;
    }
}
