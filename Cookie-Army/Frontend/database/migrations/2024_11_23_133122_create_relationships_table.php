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
    Schema::create('relationships', function (Blueprint $table) {
      $table->id()->primary();
      $table->foreignId('follower_id')->constrained('users', 'id', 'relationship_follower_id');
      $table->foreignId('following_id')->constrained('users', 'id', 'relatinships_following_id');
      $table->foreignId('user_id')->constrained('users', 'id', 'relationships_user_id');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('relationships');
  }
};
