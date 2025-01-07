<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
class Buku extends Controller
{
    public function index(){
        $buku = Http::get('https://developers.google.com/books')["message"];
        response()->json([
            "data" => $buku,
            "status_code" => 200
          ], 200);
    }
}
