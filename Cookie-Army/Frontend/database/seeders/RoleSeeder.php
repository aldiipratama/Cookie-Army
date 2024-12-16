<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
  public function run(): void
  {
    Role::create([
      'role_name' => 'super admin',
    ]);

    Role::create([
      'role_name' => 'admin',
    ]);

    Role::create([
      'role_name' => 'user',
    ]);
  }
}
