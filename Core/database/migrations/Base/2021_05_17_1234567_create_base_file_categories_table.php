<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBaseFileCategoriesTable extends Migration
{

    public function up()
    {
        Schema::create('base_file_categories', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title', 50)->nullable()->comment("عنوان");
            $table->string('name', 50)->nullable()->comment("نام");
            $table->text('description')->nullable()->comment("توضیحات");
            $table->integer('status_id')->length(1)->default(1)->comment('شناسه وضعیت فعال/غیر فعال');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('base_file_categories');
    }
}
