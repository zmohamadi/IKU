<?php

namespace Admin\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LessonScore
{
    use Dispatchable, SerializesModels;

    public $record;

    public function __construct($record)
    {
        $this->record = $record;
    }
}
