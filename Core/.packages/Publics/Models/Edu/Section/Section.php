<?php
namespace Models\Edu\Section;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Edu\SectionFactory;
use Models\Traits\Base;

class Section extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'edu_sections';
    
    public static function factory()
    {
        return SectionFactory::new();
    }

    function course()
    {
        return $this->belongsTo(\Models\Edu\Course::class);
    }

    function files()
    {
        return $this->hasMany(ArchiveFile::class);
    }
    function visits()
    {
        return $this->belongsToMany(\Models\Person\Student::class,'edu_section_view_user', 'user_id', 'section_id');

    }
}
