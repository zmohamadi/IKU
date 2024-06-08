<?php

namespace Admin\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use Admin\Events\LessonScore;
use Admin\Controllers\Edu\LessonController;

class LessonScoreListener
{

    public function handle(LessonScore $event)
    {
        $new = new LessonController;
        $new->updateScore($event);
    }
   
}
