<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduSectionFilesTable extends Migration
{

    public function up()
    {
        Schema::create('edu_section_files', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->integer('section_id');
            $table->text('description');
            $table->string('link');
            $table->integer('download_count')->default(0);
            $table->string('size');
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_section_files');
    }
}
