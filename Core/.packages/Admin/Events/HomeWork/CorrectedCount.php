<?php

namespace Admin\Events\HomeWork;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CorrectedCount
{
    use Dispatchable, SerializesModels;

    public $record;

    public function __construct($record)
    {
        $this->record = $record;
    }
}
