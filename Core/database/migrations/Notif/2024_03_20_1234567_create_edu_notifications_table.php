<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration\Notif;

class CreateEduNotificationsTable extends Migration
{
    public function up()
    {
        Schema::create('edu_notifications', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title', 250)->nullable()->comment("عنوان");
            $table->integer('lesson_id')->nullable()->comment('شناسه درس');
            $table->string('date_release', 20)->nullable()->comment("تاریخ انتشار");
            $table->string('date_exp', 20)->nullable()->comment("تاریخ انقضا");
            $table->string('thumb', 40)->nullable()->comment("تصویر بند انگشتی");
            $table->text('description')->nullable()->comment("توضیح");
            $table->integer('count_view')->default(0)->comment('تعداد بازدید');
            $table->string('lang', 2)->default("en")->comment("زبان");
            $table->integer('display_status_id')->default(1)->comment("شناسه وضعیت  نمایش محصول در صفحه اصلی");
            $table->integer('status_id')->length(1)->default(1)->comment("شناسه وضعیت فعال/غیر فعال");
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_notifications');
    }
}
