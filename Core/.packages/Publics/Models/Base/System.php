<?php
namespace Models\Base;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Base\KeywordFactory;
use Models\Traits\Base;

class System extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'base_systems';

    function lessons()
    {
        return $this->hasMany(\Models\Edu\Lesson::class,"system_id");
    }
}
