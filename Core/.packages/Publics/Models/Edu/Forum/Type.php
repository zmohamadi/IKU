<?php
namespace Models\Edu\Forum;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Forum\SubjectFactory;
use Models\Traits\Base;

class Type extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'post_subjects';
    public static function factory()
    {
        return TypeFactory::new();
    }

    public function posts()
    {
        return $this->hasMany(Post::class, "subject_id");
    }
    /**
     * Scopes
     */
}
