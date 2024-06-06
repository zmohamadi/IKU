<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{

    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->integer('category_id')->nullable();
            $table->string('thumbnail')->nullable();
            $table->integer('system_id')->default(1);
            $table->integer('status_id')->default(1);
            $table->string('lang')->default("fa");
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
