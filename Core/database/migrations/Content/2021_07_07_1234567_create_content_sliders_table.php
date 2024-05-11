<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContentSlidersTable extends Migration
{

    public function up()
    {
        Schema::create('content_sliders', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title', 200)->nullable()->comment('عنوان');
            $table->string('title2', 200)->nullable()->comment('عنوان دوم');
            $table->integer('mobile')->default(0)->comment('اسلایدر موبایل مقدار 1 و اسلایدر سیستم مقدار 0');
            $table->integer('order')->default(1)->nullable()->comment("ترتیب");
            $table->string('link', 100)->nullable()->comment('لینک');
            $table->string('image', 50)->nullable()->comment('تصویر');
            $table->text('text')->nullable()->comment('متن');
            $table->string('lang', 2)->default('en')->comment('زبان');
            $table->integer('status_id')->default(1)->comment('شناسه وضعیت فعال/غیر فعال');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('content_sliders');
    }
}
