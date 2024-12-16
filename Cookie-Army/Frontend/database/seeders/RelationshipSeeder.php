<?php

namespace Database\Seeders;

use App\Models\Relationship;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RelationshipSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    Relationship::factory(100)->recycle([
      User::all()
    ])->create();
  }
}
