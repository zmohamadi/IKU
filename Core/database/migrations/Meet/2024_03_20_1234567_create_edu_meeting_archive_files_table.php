<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration\Meet;

class CreateEduMeetingArchiveFilesTable extends Migration
{

    public function up()
    {
        Schema::create('edu_meeting_archive_files', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->integer('meeting_id')->nullable();
            $table->text('description')->nullable();
            $table->string('link')->nullable();
            $table->integer('download_count')->nullable();
            $table->string('size');
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_archive_files');
    }
}
