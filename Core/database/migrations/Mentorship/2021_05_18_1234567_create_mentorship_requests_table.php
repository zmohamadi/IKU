<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMentorshipRequestsTable extends Migration
{
    public function up()
    {
        Schema::create('mentorship_requests', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->integer('calendar_id')->nullable()->comment("شناسه تقویم");
            $table->integer('mentor_id')->nullable()->comment("شناسه منتور");
            $table->integer('mentee_id')->nullable()->comment("شناسه دانشجوی درخواست دهنده");
            // $table->integer('status_id')->length(1)->default(1)->comment("شناسه وضعیت فعال/غیر فعال");
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mentorship_requests');
    }
}
