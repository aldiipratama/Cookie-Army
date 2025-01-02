<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    /** @use HasFactory<\Database\Factories\LikeFactory> */
    use HasFactory;

    protected $guarded = ['id'];

    public function comments()
    {
        return $this->belongsTo(Comment::class, 'commentId');
    }

    public function posts()
    {
        return $this->belongsTo(Post::class, 'postId');
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'userId');
    }
}
