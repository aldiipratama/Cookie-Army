<?php

namespace Database\Factories;

use App\Models\ConnectedAccount;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JoelButcher\Socialstream\Providers;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'firstname' => fake()->firstname(),
            'lastname' => fake()->lastname(),
            'username' => fake()->username(),
            'bio' => fake()->realText(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'profile_picture' => 'https://picsum.photos/150?random=profile-picture',
            'profile_background' => 'https://picsum.photos/200/100?random=profile-background',
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            'roleId' => 3
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    /**
     * Indicate that the user should have a connected account for the given provider.
     */
    public function withConnectedAccount(string $provider, ?callable $callback = null): static
    {
        if (! Providers::enabled($provider)) {
            return $this->state([]);
        }

        return $this->has(
            ConnectedAccount::factory()
                ->state(fn (array $attributes, User $user) => [
                    'provider' => $provider,
                    'user_id' => $user->id,
                ])
                ->when(is_callable($callback), $callback),
            'ownedTeams'
        );
    }
}
