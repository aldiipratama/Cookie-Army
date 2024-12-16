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
        Schema::create('chating', function (Blueprint $table) {
            $table->id()->primary();
            $table->string('message')->nullable();
            $table->string('reply')->nullable();
            $table->foreignId('senderId')->constrained(
                'users',
                'id');
            $table->foreignId('receiveId')->constrained(
                'users',
                'id');
            $table->foreignId('createId')->constrained(
                'users',
                'id');
            $table->foreignId('updateId')->constrained(
                'users',
                'id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chating');
    }
};
