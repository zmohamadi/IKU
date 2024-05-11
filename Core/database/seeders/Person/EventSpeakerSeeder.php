<?php

namespace Database\Seeders\Person;

use Illuminate\Database\Seeder;
use Models\Person\EventSpeaker;

class EventSpeakerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EventSpeaker::factory()->count(10)->create();
    }
}
