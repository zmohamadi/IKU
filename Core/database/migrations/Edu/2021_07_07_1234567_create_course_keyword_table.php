<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLessonKeywordTable extends Migration
{

    public function up()
    {
        Schema::create('lesson_keyword', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->integer('lesson_id')->nullable();
            $table->integer('keyword_id')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('lesson_keyword');
    }
}
