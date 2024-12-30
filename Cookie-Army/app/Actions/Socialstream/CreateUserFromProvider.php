<?php

namespace App\Actions\Socialstream;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use JoelButcher\Socialstream\Contracts\CreatesConnectedAccounts;
use JoelButcher\Socialstream\Contracts\CreatesUserFromProvider;
use JoelButcher\Socialstream\Socialstream;
use Laravel\Socialite\Contracts\User as ProviderUser;

class CreateUserFromProvider implements CreatesUserFromProvider
{
    /**
     * The creates connected accounts instance.
     */
    public CreatesConnectedAccounts $createsConnectedAccounts;

    /**
     * Create a new action instance.
     */
    public function __construct(CreatesConnectedAccounts $createsConnectedAccounts)
    {
        $this->createsConnectedAccounts = $createsConnectedAccounts;
    }

    /**
     * Create a new user from a social provider user.
     */
    public function create(string $provider, ProviderUser $providerUser): User
    {
        return DB::transaction(function () use ($provider, $providerUser) {
            return tap(User::create([
                'username' => strstr($providerUser->getEmail(), '@', true),
                'email' => $providerUser->getEmail(),
                'profile_picture' => $providerUser->getAvatar(),
                'roleId' => 3
            ]), function (User $user) use ($provider, $providerUser) {
                if(is_null($user->password)){
                    return redirect()->intended(route('auth.set-password'));
                }
                
                $user->markEmailAsVerified();

                if (Socialstream::hasProviderAvatarsFeature() && $providerUser->getAvatar()) {
                    $user->setProfilePhotoFromUrl($providerUser->getAvatar());
                }


                $this->createsConnectedAccounts->create($user, $provider, $providerUser);
            });
        });
    }
}
