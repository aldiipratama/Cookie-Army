<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\Rules\Password;

class UserUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "firstname" => ["string", 'max:20'],
            "lastname" => ["string", 'max:20'],
            "username" => ["string", 'min:3', 'max:20', 'unique:users,username'],
            'email' => ['string', 'email'],
            'password' => ['string', Password::min(8)],
            'bio' => ['string', 'max:255'],
            'profile_picture' => File::image()->min(1024)->max(5 * 1024)->dimensions(Rule::dimensions()->minWidth(150)->minHeight(150)->maxWidth(1280)->maxHeight(1280)),
            'profile_background' => File::image()->min(1024)->max(10 * 1024)->dimensions(Rule::dimensions()->minWidth(640)->minHeight(360)->maxWidth(1280)->maxHeight(720)),
            'no_telepon' => ['numeric', 'string', 'min:11', 'max:16']
        ];
    }
}
