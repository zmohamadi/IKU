<?php

namespace Database\Seeders\Event;

use Illuminate\Database\Seeder;
use Models\Event\EventKeyword;

class EventKeywordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EventKeyword::factory()->count(10)->create();
    }
}
