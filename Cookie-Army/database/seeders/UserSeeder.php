<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    User::factory()->recycle([
      Role::all()
    ])->create([
      'first_name' => 'yesi',
      'last_name' => 'dedehidayati',
      'username' => 'yesi',
      'email' => 'yesidedehidayati@gmail.com',
      'email_verified_at' => now(),
      'verified' => true,
      'no_telepon' => '085798257393',
      'role_id' => 1
    ]);

    User::factory(100)->recycle([
      Role::all()
    ])->create();
  }
}
