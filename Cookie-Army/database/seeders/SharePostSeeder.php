<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\SharePost;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SharePostSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    SharePost::factory(100)->recycle([
      Post::all(),
      User::all()
    ])->create();
  }
}
