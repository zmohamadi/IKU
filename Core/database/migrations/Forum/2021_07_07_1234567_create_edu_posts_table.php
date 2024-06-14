<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduPostsTable extends Migration
{

    public function up()
    {
        Schema::create('edu_posts', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->integer('subject_id')->nullable()->comment('شناسه موضوع محتوا');
            $table->integer('creator_id')->nullable()->comment('شناسه ثبت کننده');            
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
        Schema::dropIfExists('edu_posts');
    }
}
