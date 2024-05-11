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
            $table->increments('id');
            $table->integer('homework_id')->comment('شناسه');
            $table->integer('course_id')->nullable()->comment('شناسه دوره');
            $table->integer('user_id')->comment('شناسه کاربر پاسخ دهنده');
            $table->string('mark', 200)->comment('نمره ');
            $table->text('answer')->comment('پاسخ ');
            $table->integer('status_id')->default(1)->comment('شناسه وضعیت');
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
