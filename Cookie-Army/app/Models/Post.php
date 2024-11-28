<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
  /** @use HasFactory<\Database\Factories\PostFactory> */
  use HasFactory;

  protected $guarded = ['id'];

  protected $with = ['user'];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function comment()
  {
    return $this->hasMany(Comment::class, 'post_id');
  }

  public function like()
  {
    return $this->hasMany(Like::class, 'post_id');
  }

  public function share()
  {
    return $this->hasMany(SharePost::class, 'post_id');
  }
}
