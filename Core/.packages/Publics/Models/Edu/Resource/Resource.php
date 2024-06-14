<?php
namespace Models\Edu\Resource;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;
use Database\Factories\Edu\ResourceFactory;

class Resource extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'resources';

    public static function factory()
    {
        return ResourceFactory::new();
    }
    public function fileType()
    {
        return $this->belongsTo(\Models\Base\Type::class, "file_type_id");
    }
    function course()
    {
        return $this->belongsTo(\Models\Edu\Course::class, 'course_id');
    }
    function resourceUsers()
    {
        return $this->hasMany(ResourceUser::class, 'resource_id');
    }
    function users()
    {
        return $this->belongsToMany(\Models\Person\User::class ,'edu_resource_user', 'resource_id', 'user_id');
    }
}
