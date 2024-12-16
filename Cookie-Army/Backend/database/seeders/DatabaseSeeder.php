<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
<<<<<<< HEAD
        $this->call([RoleSeeder::class, UserSeeder::class, PostSeeder::class, StorySeeder::class]);
=======
        $this->call([RoleSeeder::class, UserSeeder::class,PostSeeder::class]);
>>>>>>> 2a1f5d0e5456ee723c55fcd25453c419bdc5e5b5
    }
}
