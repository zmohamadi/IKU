<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHomeWorkAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('edu_homework_answers', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->increments('id');
            $table->integer('question_id')->nullable();
            $table->integer('homework_attemp_id')->comment('شناسه')->nullable();
            $table->integer('lesson_id')->nullable()->comment('شناسه درس');
            $table->integer('user_id')->comment('شناسه کاربر پاسخ دهنده')->nullable();
            $table->string('score', 200)->comment('نمره ')->nullable();
            $table->text('answer')->comment('پاسخ ')->nullable();
            $table->integer('answer_option_id')->nullable();
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
