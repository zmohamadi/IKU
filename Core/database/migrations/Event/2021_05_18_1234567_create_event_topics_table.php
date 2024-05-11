<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventTopicsTable extends Migration
{
    public function up()
    {
        Schema::create('event_topics', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title_fa')->nullable()->comment("عنوان");
            $table->string('title_en')->nullable()->comment("عنوان");
            $table->string('color', 50)->nullable()->comment('رنگ بک گراند');
            $table->integer('status_id')->length(1)->default(1)->comment("شناسه وضعیت فعال/غیر فعال");
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('event_topics');
    }
}
