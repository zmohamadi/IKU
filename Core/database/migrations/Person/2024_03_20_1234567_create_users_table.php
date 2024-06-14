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
            $table->string('firstname')->comment("نام");
            $table->string('lastname')->comment("نام خانوادگی");
            $table->string('mobile')->unique()->comment("شماره همراه");
            $table->string('email')->unique()->comment("ایمیل");
            $table->integer('studentID')->nullable()->comment("کد دانشجویی");
            $table->string('password')->nullable()->comment("رمز عبور");
            $table->integer('role_id')->nullable()->comment("نقش");
            $table->integer('person_id')->nullable()->comment("کد پرسنلی");
            $table->integer('gender_id')->nullable()->comment("جنسیت");
            $table->string('photo')->nullable()->comment("تصویر");
            $table->integer('status_id')->default(1)->comment("شناسه وضعیت فعال/غیر فعال");
            $table->string('lang', 2)->default("fa")->comment("زبان");
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
