<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'firstname' => 'admin',
            'lastname' => null,
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('admin123'),
        ]);

        User::factory()->create([
            'firstname' => 'Aldi',
            'lastname' => 'Pratama',
            'username' => 'alxdyy',
            'email' => 'paldi0013@gmail.com',
            'email_verified_at' => now(),
            'no_telepon' => '6285798257393',
            'verified_at' => now(),
            'roleId' => 1
        ]);
    }
}
