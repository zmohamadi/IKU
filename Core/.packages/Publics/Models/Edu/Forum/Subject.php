<?php
namespace Models\Edu\Forum;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Forum\SubjectFactory;
use Models\Traits\Base;

class Subject extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'post_subjects';
    public static function factory()
    {
        return SubjectFactory::new();
    }

    public function posts()
    {
        return $this->hasMany(Post::class, "subject_id");
    }
    public function creator()
    {
        return $this->belongsTo(\Models\Person\User::class, "creator_id");
    }
    public function getCreatedAtAttribute($date)
    {
        return \Carbon\Carbon::parse($date)->format('d M Y H:s');
    }
}
