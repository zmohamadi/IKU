<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration\Meet;

class CreateEduMeetingUserTable extends Migration
{

    public function up()
    {
        Schema::create('edu_meeting_user', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            
            $table->integer('student_id');
            $table->integer('meeting_id');
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_meeting_user');
    }
}
