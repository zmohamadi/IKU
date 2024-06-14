<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('survey_surveys', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title');
            $table->unsignedBigInteger('lesson_id');
            $table->string('start_date')->nullable();
            $table->string('expire_date')->nullable();
            $table->text('description')->nullable();
            $table->string('lang')->default('en');
            $table->integer('creator_id')->nullable();
            $table->integer('status_id')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('survey_surveys');
    }
};