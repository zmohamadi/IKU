<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMentorshipEvaluatesTable extends Migration
{
    public function up()
    {
        Schema::create('mentorship_evaluates', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->integer('mentor_id')->nullable()->comment("شناسه منتور");
            $table->integer('mentee_id')->nullable()->comment("شناسه شاگرد");
            $table->string('score', 2)->nullable()->comment("نمره یا امتیاز به منتور توسط دانشجو");
            $table->string('date', 20)->nullable()->comment("تاریخ و زمان ثبت امتیاز");
            $table->string('lang', 2)->default('en')->comment('زبان');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mentorship_evaluates');
    }
}
