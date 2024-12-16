<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('likes', function (Blueprint $table) {
      $table->id()->primary();
      $table->foreignId('comment_id')->constrained('comments', 'id', 'like_comment_id')->onDelete('cascade');
      $table->foreignId('post_id')->constrained('posts', 'id', 'like_post_id');
      $table->foreignId('user_id')->constrained('users', 'id', 'like_user_id');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('likes');
  }
};
