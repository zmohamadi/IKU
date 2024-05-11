<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHomeWorkAnswerFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('edu_homework_answer_files', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('homework_answer_id')->comment('شناسه پاسخ تحقیق');
            $table->integer('file_category_id')->comment('شناسه دسته بتدی فایل');
            $table->integer('file_type_id')->comment('شناسه نوع فایل');
            $table->string('name', 200)->comment('نام فایل');
            $table->string('url', 200)->comment('مسیر فایل');
            $table->string('extension', 200)->comment('پسوند فایل');
            $table->string('size', 200)->comment('سایز');
            $table->string('width', 200)->comment('عرض');
            $table->string('height', 200)->comment('ارتفاع');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('edu_homework_answer_files');
    }
}
