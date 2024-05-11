<?php

namespace Database\Seeders\Mentorship;

use Illuminate\Database\Seeder;
use Models\Mentorship\Topic;
use Models\Person\Mentor;
class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Topic::factory()
        ->has(Mentor::factory()->count(1),"mentors")
        ->count(5)->create();
    }
}
