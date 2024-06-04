<?php

namespace Admin\Events\Homework;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class Score
{
    use Dispatchable, SerializesModels;

    public $record;

    public function __construct($record)
    {
        $this->record = $record;
    }
}
