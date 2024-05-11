<?php
namespace Models\Edu;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Edu\EnrollFactory;
use Models\Traits\Base;

class Enroll extends Model
{
    use Base;
    const STATUS = [
        'requested' => 0,
        'accepted' => 1,
        'rejected' => 2,
        'deleted' => 3,
    ];
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'edu_enroll';
    
    public static function factory()
    {
        return EnrollFactory::new();
    }

    function role()
    {
        return $this->belongsTo(\Models\Person\Role::class);
    }

    function users()
    {
        return $this->hasMany(\Models\Edu\CourseFactory::class);
    }

    function courses()
    {
        return $this->hasMany(\Models\Edu\Course::class);
    }
    public function reqStatus()
    {
        return $this->belongsTo(\Models\Base\Status::class, 'status_id', 'code')->where('group_id', 2);
    }
    public function getCreatedAtAttribute($date)
    {
        return \Carbon\Carbon::parse($date)->format('d M Y');
    }

}
