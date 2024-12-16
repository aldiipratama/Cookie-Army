<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class Anime extends Controller
{
    public function index(){
        $anime = Http::get('https://otakudesu.cloud/')["message"];

        response()->json([
            "data" => $anime,
            "status_code" => 200
          ], 200);
    }
}
