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
    Schema::create('share_posts', function (Blueprint $table) {
      $table->id()->primary();
      $table->foreignId('post_id')->constrained('posts', 'id', 'share_posts_post_id');
      $table->foreignId('user_id')->constrained('users', 'id', 'share_posts_user_id');
      $table->timestamp('created_at');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('share_posts');
  }
};
