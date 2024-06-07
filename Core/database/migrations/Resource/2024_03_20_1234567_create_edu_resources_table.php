<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration\Resource;

class CreateEduResourcesTable extends Migration
{
    public function up()
    {
        Schema::create('edu_resources', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title', 250)->nullable()->comment("عنوان");
            $table->integer('lesson_id')->nullable()->comment('شناسه درس');
            $table->integer('file_type_id')->length(1)->nullable()->comment('شناسه نوع فایل از جدول انواع فایل');
            $table->string('name', 50)->nullable()->comment("نام فایل و پسوند");
            $table->string('size', 10)->nullable()->comment("حجم فایل");
            $table->string('duration', 10)->nullable()->comment("مدت زمان");
            $table->text('link')->nullable()->comment("لینک");
            $table->integer('count_view')->default(0)->comment('تعداد بازدید');
            $table->integer('display_status_id')->default(1)->comment("شناسه وضعیت  نمایش محصول در صفحه اصلی");
            $table->integer('status_id')->length(1)->default(1)->comment("شناسه وضعیت فعال/غیر فعال");
            $table->string('lang', 2)->default("en")->comment("زبان");
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_resources');
    }
}
