<?php

namespace Admin\Listeners\Homework;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use Admin\Events\Homework\CorrectedCount;
use Admin\Controllers\Edu\HomeWorkController;

class CorrectedListener
{

    public function handle(CorrectedCount $record)
    {
        $new = new HomeWorkController;
        $new->updateCorrectedCount($record);
    }
   
}
