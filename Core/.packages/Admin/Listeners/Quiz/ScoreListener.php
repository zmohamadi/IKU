<?php

namespace Admin\Listeners\Quiz;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use Admin\Events\Quiz\Score;
use Admin\Controllers\Edu\QuizController;

class ScoreListener
{

    public function handle(Score $record)
    {
        $new = new QuizController;
        $new->updateTotalUserScore($record);
    }
   
}
