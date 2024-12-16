<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::factory()->create([
            'firstname' => 'Aldi',
            'lastname' => 'Pratama',
            'username' => 'alxdyy',
            'email' => 'paldi0013@gmail.com',
            'email_verified_at' => now(),
            'roleId' => 1
        ]);

        User::factory(10)->create();
    }
}
