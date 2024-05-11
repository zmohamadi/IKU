<?php

namespace Database\Seeders\Edu;

use Illuminate\Database\Seeder;
use Models\Edu\Course;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Course::factory()->count(10)->create();
    }
}
