<?php

namespace Database\Seeders\Event;

use Illuminate\Database\Seeder;
use Models\Event\Event;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::factory()->count(10)->create();
    }
}
