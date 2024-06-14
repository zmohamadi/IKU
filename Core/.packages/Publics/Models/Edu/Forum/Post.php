<?php
namespace Models\Edu\Forum;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Forum\PostFactory;
use Models\Traits\Base;

class Post extends Model
{
    use Base;
    
    protected $guarded = ['updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'posts';
    
    public static function factory()
    {
        return PostFactory::new();
    }

    // public function newQuery($excludeDeleted = true)
    // {
    //     return parent::newQuery($excludeDeleted)->where($this->table.'.lang', \App::getLocale());
    // }
    public function creator()
    {
        return $this->belongsTo(\Models\Person\User::class, "creator_id");
    }
    
    public function subject()
    {
        return $this->belongsTo(Subject::class, "subject_id");
    }
    
    public function getCreatedAtAttribute($date)
    {
        return \Carbon\Carbon::parse($date)->format('d M Y H:s');
    }
}
