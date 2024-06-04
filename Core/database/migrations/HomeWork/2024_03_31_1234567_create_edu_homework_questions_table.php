<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduHomeWorkQuestionsTable extends Migration
{

    public function up()
    {
        Schema::create('edu_homework_questions', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->text('title')->nullable()->comment("سئوال");
            $table->integer('homework_id')->nullable()->comment('شناسه هوم ورک');
            $table->integer('question_type_id')->default(1)->comment('شناسه نوع سئوال');
            $table->integer('correct_option_id')->default(1)->comment('شناسه پاسخ صحیح');
            $table->integer('order')->nullable()->comment("ترتیب");
            $table->string('score', 5)->default(0)->comment("نمره");
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_homework_questions');
    }
}
