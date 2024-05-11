<?php
namespace Models\Person;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Role extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'person_roles';

    function users()
    {
        return $this->hasMany(\Models\Person\User::class, 'role_id');
    }


}
