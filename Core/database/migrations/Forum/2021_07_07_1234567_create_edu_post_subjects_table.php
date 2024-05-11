<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduSubjectsTable extends Migration
{

    public function up()
    {
        Schema::create('edu_post_subjects', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title', 200)->nullable()->comment('عنوان به زبان فارسی');
            $table->integer('course_id')->nullable();
            $table->integer('creator_id')->nullable()->comment('شناسه ثبت کننده');      
            $table->integer('order')->default(1)->nullable()->comment("ترتیب");
            $table->integer('count_post')->default(0)->comment('تعداد محتوا');
            $table->integer('status_id')->length(1)->default(1)->comment('شناسه وضعیت فعال/غیر فعال');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('edu_post_subjects');
    }
}
