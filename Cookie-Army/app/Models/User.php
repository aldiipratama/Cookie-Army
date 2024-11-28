<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
  use HasFactory, Notifiable;

  protected $guarded = [
    'id',
    'role_id'
  ];

  protected $hidden = [
    'password',
    'remember_token',
  ];

  protected function casts(): array
  {
    return [
      'email_verified_at' => 'datetime',
      'password' => 'hashed',
    ];
  }

  protected $with = ['role'];

  public function role()
  {
    return $this->belongsTo(Role::class);
  }

  public function post()
  {
    return $this->hasMany(Post::class, 'user_id');
  }

  public function comment()
  {
    return $this->hasMany(Comment::class, 'user_id');
  }

  public function like()
  {
    return $this->hasMany(Like::class, 'user_id');
  }

  public function share()
  {
    return $this->hasMany(SharePost::class, 'user_id');
  }

  public function follower()
  {
    return $this->hasMany(Relationship::class, 'follower_id');
  }

  public function following()
  {
    return $this->hasMany(Relationship::class, 'following_id');
  }

  public function user()
  {
    return $this->hasMany(Relationship::class, 'user_id');
  }
}
