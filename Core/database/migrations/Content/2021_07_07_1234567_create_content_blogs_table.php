<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContentBlogsTable extends Migration
{

    public function up()
    {
        Schema::create('content_blogs', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title', 200)->nullable()->comment('عنوان');
            $table->integer('subject_id')->nullable()->comment('شناسه موضوع محتوا');
            $table->integer('creator_id')->nullable()->comment('شناسه ثبت کننده');
            $table->integer('editor_id')->nullable()->comment('شناسه ویرایش کننده');
            $table->string('image', 50)->nullable()->comment('تصویر');
            $table->string('thumb', 50)->nullable()->comment('بند انگشتی');
            $table->text('summary')->nullable()->comment('خلاصه');
            $table->text('text')->nullable()->comment('متن');
            $table->integer('count_view')->default(0)->comment('تعداد بازدید');
            $table->string('lang', 2)->default('en')->comment('زبان');
            $table->integer('status_id')->length(1)->default(1)->comment('شناسه وضعیت فعال/غیر فعال');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('content_blogs');
    }
}
