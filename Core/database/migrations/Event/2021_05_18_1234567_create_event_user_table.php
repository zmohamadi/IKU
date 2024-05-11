<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventUserTable extends Migration
{
    public function up()
    {
        Schema::create('event_user', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->integer('event_id')->nullable()->comment('شناسه رویداد');
            $table->integer('user_id')->nullable()->comment('شناسه کاربر');
            $table->integer('is_speaker')->default(0)->comment('مقدار برابر یک ، کاربر سخنران ایونت می باشد');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('event_user');
    }
}
