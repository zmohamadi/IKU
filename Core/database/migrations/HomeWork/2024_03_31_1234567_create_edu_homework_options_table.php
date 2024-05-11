<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduHomeWorkOptionsTable extends Migration
{

    public function up()
    {
        Schema::create('edu_homework_options', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title')->nullable();
            $table->integer('homework_id')->nullable();
            $table->integer('status_id')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_homework_options');
    }
}
