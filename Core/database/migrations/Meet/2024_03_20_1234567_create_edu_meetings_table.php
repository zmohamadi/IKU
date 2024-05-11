<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration\Meet;

class CreateEduMeetingsTable extends Migration
{

    public function up()
    {
        Schema::create('edu_meetings', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title')->nullable();
            $table->string('start_hour')->nullable();
            $table->string('duration')->nullable();
            $table->integer('course_id')->nullable();
            $table->string('meet_link')->nullable();
            $table->integer('presence_count')->default(0);
            $table->integer('status_id')->default(1);
            $table->string('date')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_meetings');
    }
}
