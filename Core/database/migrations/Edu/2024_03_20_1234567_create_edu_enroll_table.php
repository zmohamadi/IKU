<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduEnrollTable extends Migration
{

    public function up()
    {
        Schema::create('edu_enroll', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('last_activity_date')->nullable();
            $table->integer('total_progress')->nullable();
            $table->integer('total_score')->default(0);
            $table->integer('course_id')->default(0);
            $table->integer('role_id')->default(0);
            $table->integer('user_id')->default(0);
            $table->integer('status_id')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_enroll');
    }
}
