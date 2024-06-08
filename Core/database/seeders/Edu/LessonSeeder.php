<?php

namespace Database\Seeders\Edu;

use Illuminate\Database\Seeder;
use Models\Edu\Lesson;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Lesson::factory()->count(10)->create();
    }
}
