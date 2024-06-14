<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration\Resource;

class CreateEduResourceUserTable extends Migration
{
    public function up()
    {
        Schema::create('edu_resource_user', function (Blueprint $table) {
            
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->integer('resource_id')->nullable()->comment('شناسه منبع داده');
            $table->integer('user_id')->nullable()->comment('شناسه کاربر');
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('edu_resource_user');
    }
}
