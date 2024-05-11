<?php

namespace Database\Seeders\Event;

use Illuminate\Database\Seeder;
use Models\Event\Topic;
use Models\Event\EventUser;
use Models\Event\Event;
use Models\Person\EventSpeaker;
use Models\Base\Keyword;

class EventTopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Topic::factory()
        ->has(
            Event::factory()
                ->has(EventSpeaker::factory()->count(1),"speakers")
                ->has(Keyword::factory()->count(1))
            ->count(1), 'events')
        ->count(5)->create();
    }
}
