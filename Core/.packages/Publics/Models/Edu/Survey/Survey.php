<?php
namespace Models\Edu\Survey;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;
use Database\Factories\Survey\SurveyFactory;


class Survey extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden = ['updated_at', 'deleted_at'];
    protected $dates = ['deleted_at'];
    protected $table = 'edu_survey_surveys';
    protected $casts = [
        'created_at' => 'datetime:d.m.Y H:i',
        // 'start_date' => 'datetime:d.m.Y',
        // 'expire_date' => 'datetime:d.m.Y',
    ];

    public static function factory()
    {
        return SurveyFactory::new();
    }

    public function users()
    {
        return $this->belongsToMany(\Models\Person\User::class, 'answer', 'user_id', 'survey_id');
    }

    public function questions()
    {
        return $this->hasMany(Question::class,"survey_id");
    }

    public function lesson()
    {
        return $this->belongsTo(\Models\Edu\Lesson::class);
    }

    public function creator()
    {
        return $this->belongsTo(\Models\Person\User::class, 'creator_id');
    }

}
