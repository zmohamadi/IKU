<?php

namespace Database\Seeders\Event;

use Illuminate\Database\Seeder;
use Models\Event\EventUser;

class EventUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EventUser::factory()->count(10)->create();
    }
}
