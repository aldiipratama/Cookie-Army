<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
  /** @use HasFactory<\Database\Factories\LikeFactory> */
  use HasFactory;

  protected $guarded = ['id'];

  protected $with = ['user', 'post', 'comment'];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function post()
  {
    return $this->belongsTo(Post::class);
  }

  public function comment()
  {
    return $this->belongsTo(Comment::class);
  }
}
