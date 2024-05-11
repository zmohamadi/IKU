<?php

namespace Database\Seeders\Event;

use Illuminate\Database\Seeder;
use Models\Event\EventUserPresence;

class EventUserPresenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EventUserPresence::factory()->count(10)->create();
    }
}
