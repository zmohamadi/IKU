<?php

namespace Admin\Listeners\Homework;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use Admin\Events\Homework\Score;
use Admin\Controllers\Edu\HomeWorkController;

class ScoreListener
{

    public function handle(Score $record)
    {
        $new = new HomeWorkController;
        $new->updateTotalUserScore($record);
    }
   
}
