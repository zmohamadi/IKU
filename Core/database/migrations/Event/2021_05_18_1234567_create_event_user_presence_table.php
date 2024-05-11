<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventUserPresenceTable extends Migration
{
    public function up()
    {
        Schema::create('event_user_presence', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->integer('event_id')->nullable()->comment('شناسه رویداد');
            $table->integer('user_id')->nullable()->comment('شناسه کاربر');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('event_user_presence');
    }
}
