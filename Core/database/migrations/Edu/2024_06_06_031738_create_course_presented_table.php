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
        Schema::create('lesson_presented', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('code')->nullable();
            $table->string('year')->nullable();
            $table->string('semester')->nullable();
            $table->integer('teacher_id')->nullable();
            $table->integer('status_id')->nullable();
            $table->integer('group_id')->nullable();
            $table->integer('system_id')->nullable();
            $table->integer('less_id')->nullable();
            $table->string('date_start')->nullable();
            $table->string('date_end')->nullable();
            $table->integer('count_students')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lesson_presented');
    }
};
