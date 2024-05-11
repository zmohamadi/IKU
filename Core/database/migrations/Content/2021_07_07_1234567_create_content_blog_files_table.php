<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContentBlogFilesTable extends Migration
{

    public function up()
    {
        Schema::create('content_blog_files', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->integer('blog_id')->nullable()->comment('شناسه مقاله');
            $table->integer('file_type_id')->nullable()->comment('شناسه نوع فایل از جدول انواع فایل');
            $table->integer('file_category_id')->nullable()->comment('شناسه دسته بندی');
            $table->string('name', 50)->nullable()->comment('نام فایل و پسوند');
            $table->string('url', 50)->nullable()->comment('نام فایل');
            $table->string('extension', 5)->nullable()->comment('پسوند');
            $table->string('size', 5)->nullable()->comment('سایز');
            $table->string('width', 5)->nullable()->comment('عرض عکس');
            $table->string('height', 5)->nullable()->comment('ارتفاع عکس');
            $table->integer('status_id')->length(1)->default(1)->comment('شناسه وضعیت فعال/غیر فعال');
            $table->softDeletes()->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('content_blog_files');
    }
}
