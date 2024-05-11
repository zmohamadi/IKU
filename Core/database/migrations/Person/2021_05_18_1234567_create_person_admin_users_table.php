<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonAdminUsersTable extends Migration
{

    public function up()
    {
        Schema::create('person_admin_users', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('name')->nullable()->comment("نام");
            $table->string('lname')->nullable()->comment("نام خانوادگی");
            $table->integer('role_id')->length(1)->nullable()->comment("شناسه نقش پرسنلی");
            $table->string('mobile')->nullable()->comment("شماره همراه");
            $table->string('whatsapp')->nullable()->comment("شماره ارتباط مجازی با واتساپ");
            $table->string('email')->unique()->nullable()->comment("ایمیل کاربر");
            $table->string('pic')->nullable()->comment("عکس کاربر");
            $table->text('address')->nullable()->comment("آدرس");
            $table->string('username')->nullable()->comment("نام کاربری");
            $table->string('password')->nullable()->comment("رمز عبور");
            $table->string('lang', 2)->default("en")->comment("زبان");
            $table->integer('status_id')->length(1)->default(1)->comment("شناسه وضعیت فعال/غیر فعال");
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('person_admin_users');
    }
}
