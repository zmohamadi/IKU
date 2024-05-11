<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title', 50)->nullable()->comment("عنوان");
            $table->integer('topic_id')->nullable()->comment("شناسه موضوع");
            $table->integer('is_online')->default(1)->comment("برگزاری رویداد آنلاین می باشد، مقدار 1 وگرنه مقدار 0");
            $table->string('room', 100)->nullable()->comment("اتاق برگزاری(در صورت برگزاری آنلاین لینک و آفلاین لینک)");
            $table->string('date_time_holding', 20)->nullable()->comment("تاریخ برگزاری");
            $table->string('date_time_register', 20)->nullable()->comment("تاریخ مهلت ثبت نام");
            $table->string('time_holding', 20)->nullable()->comment("ساعت برگزاری");
            $table->string('time_register', 20)->nullable()->comment("ساعت مهلت ثبت نام");
            $table->integer('timezone_id')->nullable()->comment("موقعیت مکانی با توجه به ثبت تاریخ و زمان");
            $table->string('thumb', 30)->nullable()->comment("تصویر بند انگشتی");
            $table->text('description')->nullable()->comment("توضیح");
            $table->integer('count_registrants')->default(0)->comment("تعداد ثبت نام کنندگان");
            $table->integer('count_attendees')->default(0)->comment("تعداد حاضرین");
            $table->integer('count_speakers')->default(0)->comment("تعداد سخنران");
            $table->string('lang', 2)->default("en")->comment("زبان");
            $table->integer('status_id')->length(1)->default(1)->comment("شناسه وضعیت فعال/غیر فعال");
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('events');
    }
}
