<?php
namespace Models\Edu;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class EducationLevel extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'person_education_levels';

    function users()
    {
        return $this->hasMany(\Models\Person\User::class,"level_id");
    }


}
