<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCourseKeywordTable extends Migration
{

    public function up()
    {
        Schema::create('edu_course_keyword', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->integer('course_id')->nullable();
            $table->integer('keyword_id')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('edu_course_keyword');
    }
}
