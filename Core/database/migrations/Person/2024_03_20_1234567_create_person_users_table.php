<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonUsersTable extends Migration
{

    public function up()
    {
        Schema::create('person_users', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('name');
            $table->string('lname');
            $table->string('email')->unique();
            $table->integer('studentID')->nullable();
            $table->string('mobile')->nullable();
            $table->string('password')->nullable();
            $table->integer('role_id')->default(2);
            $table->integer('is_mentor')->default(0);
            $table->integer('is_mentee')->default(0);
            $table->integer('is_event_speaker')->default(0);
            $table->integer('level_id')->nullable();
            $table->integer('mentorship_topic_id')->nullable();
            $table->integer('timezone_id')->nullable();
            $table->float('avg_rate')->default(0)->comment('میانگین ارزیابی منتی ها ');
            $table->float('reviews_count')->default(0)->comment('تعداد منتی های ارزیابی کننده');
            $table->string('birthdate')->nullable();
            $table->string('pic')->nullable();
            $table->text('biography')->nullable()->comment("biography(Instructor)");
            $table->string('work_experience')->nullable()->comment("work_experience(Mentor)");
            $table->string('skills')->nullable()->comment("skills (Mentor)");
            $table->string('certifications')->nullable()->comment("certifications (Mentor)");
            $table->string('interest_area')->nullable()->comment("interest_area (Mentee)");
            $table->string('mentorship_objectives')->nullable()->comment("mentorship_objectives (Mentee)");
            $table->integer('course_count')->nullable();
            $table->string('last_login')->nullable();
            $table->integer('status_id')->default(1);
            $table->integer('order')->default("0");
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('person_users');
    }
}
