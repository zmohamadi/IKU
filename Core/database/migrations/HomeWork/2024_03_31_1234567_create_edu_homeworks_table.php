<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduHomeWorksTable extends Migration
{

    public function up()
    {
        Schema::create('edu_homeworks', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->integer('course_id')->default(1);
            $table->string('start_date')->nullable();
            $table->string('expire_date')->nullable();
            $table->integer('answer_count')->default(0)->comment('total of answers');
            $table->integer('answer_correcting_count')->default(0)->comment('total of checked answers');
            $table->integer('creator_id')->nullable();
            $table->string('total_score', 5)->nullable();
            $table->integer('corrected_count')->default(0);
            $table->integer('question_count')->default(0);
            $table->integer('countQType1')->default(0);
            $table->integer('countQType2')->default(0);
            $table->integer('response_count')->default(0);
            
            $table->integer('status_id')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_homeworks');
    }
}
