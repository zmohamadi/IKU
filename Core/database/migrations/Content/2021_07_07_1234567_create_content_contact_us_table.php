<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContentContactUsTable extends Migration
{

    public function up()
    {
        Schema::create('content_contactus', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('sender_name', 50)->nullable()->comment('نام فرستنده');
            $table->string('sender_email', 50)->nullable()->comment('ایمیل فرستنده');
            $table->integer('responder_id')->nullable()->comment('شناسه کاربر پاسخ دهنده');
            $table->string('subject', 50)->nullable()->comment('موضوع');
            $table->text('comment')->nullable()->comment('اظهار نظر');
            $table->text('reply')->nullable()->comment('پاسخ');
            $table->string('lang', 2)->default('en')->comment('زبان');
            $table->integer('status_id')->length(1)->default(1)->comment('شناسه وضعیت فعال/غیر فعال');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('content_contactus');
    }
}
