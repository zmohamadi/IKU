<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContentSiteTextsTable extends Migration
{

    public function up()
    {
        Schema::create('content_site_texts', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title_fa', 200)->nullable()->comment('عنوان به زبان فارسی');
            $table->string('title_en', 200)->nullable()->comment('عنوان به زبان انگلیسی');
            $table->integer('code')->nullable()->comment('کد');
            $table->string('icon', 50)->nullable()->comment('آیکون');
            $table->string('image', 50)->nullable()->comment('تصویر');
            $table->string('link', 100)->nullable()->comment('لینک');
            $table->text('text_fa')->nullable()->comment('متن به زبان فارسی');
            $table->text('text_en')->nullable()->comment('متن به زبان انگلیسی');
            $table->text('text_ar')->nullable()->comment('متن به زبان عربی');
            $table->integer('status_id')->length(1)->default(1)->comment('شناسه وضعیت فعال/غیر فعال');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('content_site_texts');
    }
}
