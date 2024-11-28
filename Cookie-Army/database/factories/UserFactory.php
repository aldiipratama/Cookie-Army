<?php

namespace Database\Factories;

use App\Models\Follower;
use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
  protected static ?string $password;

  public function definition(): array
  {
    return [
      'first_name' => fake()->firstName(),
      'last_name' => fake()->lastName(),
      'username' => fake()->userName(),
      'email' => fake()->unique()->safeEmail(),
      // 'email_verified_at' => now(),
      'password' => static::$password ??= Hash::make('123'),
      'no_telepon' => fake()->phoneNumber(),
      'verified' => false,
      'bio' => fake()->realText(),
      'profile_picture' => fake()->imageUrl(50, 50),
      'role_id' => Role::factory(),
      'remember_token' => Str::random(10),
    ];
  }

  /**
   * Indicate that the model's email address should be unverified.
   */
  public function unverified(): static
  {
    return $this->state(fn(array $attributes) => [
      'email_verified_at' => null,
    ]);
  }
}
