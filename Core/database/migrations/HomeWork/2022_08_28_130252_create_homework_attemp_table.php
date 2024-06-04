<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHomeWorkAttempTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('edu_homework_attemp', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->increments('id');
            $table->integer('user_id')->nullable()->comment('شناسه کاربر تکلیف دهنده');
            $table->integer('course_id')->nullable()->comment('شناسه دوره');
            $table->integer('homework_id')->nullable()->comment('شناسه تکلیف');
            $table->string('total_score', 5)->default(0)->comment("جمع نمره دانشجو");
            $table->string('homework_score', 5)->default(0)->comment("جمع نمره تکلیف");
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('edu_homework_answers');
    }
}
