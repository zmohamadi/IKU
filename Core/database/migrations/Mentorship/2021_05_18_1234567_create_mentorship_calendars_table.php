<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMentorshipCalendarsTable extends Migration
{
    public function up()
    {
        Schema::create('mentorship_calendars', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->integer('mentor_id')->nullable()->comment("شناسه منتور، کاربری که برای منتور شیپ مشخص شده است.");
            $table->integer('mentee_id')->nullable()->comment("شناسه دانشجو، کاربری که تاریخ مورد نظر را پذیرفه است.");
            $table->string('from_hour', 5)->nullable()->comment("از ساعت");
            $table->string('to_hour', 5)->nullable()->comment("تا ساعت");
            $table->string('date', 10)->nullable()->comment("تاریخ");
            $table->integer('timezone_id')->nullable()->comment("موقعیت مکانی با توجه به ثبت تاریخ و زمان");
            $table->string('online_link', 200)->nullable()->comment("لینک جلسه انلاین");
            $table->string('lang', 2)->default('en')->comment('زبان');
            $table->integer('status_id')->length(1)->default(1)->comment("شناسه وضعیت فعال/غیر فعال");
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mentorship_calendars');
    }
}
