<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{

    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('mobile')->unique();
            $table->string('email')->unique();
            $table->integer('studentID')->nullable();
            $table->string('password')->nullable();
            $table->integer('role_id')->nullable();
            $table->integer('person_id')->nullable();
            $table->integer('gender_id')->nullable();
            $table->string('photo')->nullable();
            $table->integer('status_id')->default(1);
            $table->string('lang', 2)->default("fa");
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
