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
    Schema::create('comments', function (Blueprint $table) {
      $table->id()->primary();
      $table->string('description');
      // $table->foreignId('reply_id')->constrained('replies', 'id', 'comment_reply_id');
      $table->foreignId('post_id')->constrained('posts', 'id', 'comment_post_id');
      $table->foreignId('user_id')->constrained('users', 'id', 'comment_user_id');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('comments');
  }
};
