<?php

namespace Database\Seeders\HomeWork;

use Illuminate\Database\Seeder;
use Models\Edu\HomeWork\Answer;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Answer::factory()->count(10)->create();
    }
}
