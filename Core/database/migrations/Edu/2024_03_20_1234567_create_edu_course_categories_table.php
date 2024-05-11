<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduCourseCategoriesTable extends Migration
{

    public function up()
    {
        Schema::create('edu_course_categories', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title_fa')->nullable();
            $table->string('title_en')->nullable();
            $table->string('pic')->nullable();
            $table->string('color', 50)->nullable()->comment('رنگ بک گراند');
            $table->integer('status_id')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_course_categories');
    }
}
