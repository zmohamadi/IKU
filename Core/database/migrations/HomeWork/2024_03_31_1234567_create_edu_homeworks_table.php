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
            $table->text('text')->nullable();
            $table->integer('course_id')->default(1);
            $table->integer('type_id')->default(1);
            $table->integer('correct_option_id')->default(0);
            $table->string('start_date');
            $table->string('end_date');
            $table->string('score')->default(0);
            $table->integer('currect_option_id')->nullable()->comment('the option is correct');
            $table->integer('answer_count')->default(0)->comment('total of answers');
            $table->integer('answer_currecting_count')->default(0)->comment('total of checked answers');
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
