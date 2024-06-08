<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduSectionsTable extends Migration
{

    public function up()
    {
        Schema::create('edu_sections', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title')->nullable();
            $table->string('duration')->nullable();
            $table->text('description')->nullable();
            $table->text('youtube')->nullable();
            $table->integer('view_count')->default(0);
            $table->integer('lesson_id');
            $table->integer('status_id')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_sections');
    }
}
