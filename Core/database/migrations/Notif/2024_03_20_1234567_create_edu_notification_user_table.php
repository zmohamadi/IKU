<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration\Notif;

class CreateEduNotificationUserTable extends Migration
{
    public function up()
    {
        Schema::create('edu_notification_user', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->integer('notif_id')->nullable()->comment('شناسه نوتیف');
            $table->integer('user_id')->nullable()->comment('شناسه کاربر');
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_notification_user');
    }
}
