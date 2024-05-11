<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContentBlogSubjectsTable extends Migration
{

    public function up()
    {
        Schema::create('content_blog_subjects', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title_fa', 200)->nullable()->comment('عنوان به زبان فارسی');
            $table->string('title_en', 200)->nullable()->comment('عنوان به زبان انگلیسی');
            $table->string('color', 50)->nullable()->comment('رنگ بک گراند');
            $table->integer('order')->default(1)->nullable()->comment("ترتیب");
            $table->integer('count_blog')->default(0)->comment('تعداد محتوا');
            $table->integer('status_id')->length(1)->default(1)->comment('شناسه وضعیت فعال/غیر فعال');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('content_blog_subjects');
    }
}
