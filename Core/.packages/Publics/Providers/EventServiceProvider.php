<?php

namespace Publics\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

use Admin\Events\Homework\CorrectedCount as HomeworkCorrect;
use Admin\Listeners\Homework\CorrectedListener as HomeworkCorrectedListener;

use Admin\Events\Homework\Score as HomeworkScore;
use Admin\Listeners\Homework\ScoreListener as HomeworkScoreListener;

use Admin\Events\Quiz\CorrectedCount as QuizCorrect;
use Admin\Listeners\Quiz\CorrectedListener as QuizCorrectedListener;

use Admin\Events\Quiz\Score as QuizkScore;
use Admin\Listeners\Quiz\ScoreListener as QuizScoreListener;

use Admin\Events\StudentScore;
use Admin\Listeners\StudentScoreListener;

use Admin\Events\CourseScore;
use Admin\Listeners\CourseScoreListener;

class EventServiceProvider extends ServiceProvider
{
    
    protected $listen = [
        HomeworkCorrect::class => [
            [HomeworkCorrectedListener::class, 'handle'],
        ],
        HomeworkScore::class => [
            [HomeworkScoreListener::class, 'handle'],
        ],
        StudentScore::class => [
            [StudentScoreListener::class, 'handle'],
        ],
        CourseScore::class => [
            [CourseScoreListener::class, 'handle'],
        ],
    ];
}
