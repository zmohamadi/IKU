<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduCoursesTable extends Migration
{

    public function up()
    {
        Schema::create('edu_courses', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->text('objectives')->nullable();
            $table->string('start_date')->nullable();
            $table->string('end_date')->nullable();
            $table->string('duration')->nullable();
            $table->string('registration_end_date')->nullable();
            $table->integer('timezone_id')->nullable()->comment("موقعیت مکانی با توجه به ثبت تاریخ و زمان");
            $table->string('thumbnail')->nullable();
            $table->integer('student_count')->default(0);
            $table->integer('meeting_count')->default(0);
            $table->integer('quiz_count')->default(0);
            $table->integer('view_count')->default(0);
            $table->integer('homework_count')->default(0);
            $table->integer('content_count')->default(0);
            $table->integer('top_score')->default("100");
            $table->integer('order')->default("0");
            $table->integer('display_home')->default("0");
            $table->integer('average_score')->default("100");
            $table->integer('status_id')->default(1);
            $table->integer('level_id')->nullable();
            $table->integer('instructor_id')->nullable();
            $table->integer('meeting_id')->nullable();
            $table->integer('category_id')->nullable();
            $table->integer('count_view')->default(0)->comment('تعداد بازدید');
            $table->string('lang')->default("en");
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_courses');
    }
}
