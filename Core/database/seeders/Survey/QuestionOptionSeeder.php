<?php

namespace Database\Seeders\Survey;

use Illuminate\Database\Seeder;
use Models\Edu\Survey\QuestionOption;

class QuestionOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            [
                "question_id" => 1,
                "title" => "good",
                "order" => 2,
                "lang" => 'en',
                "status_id" => 1,
            ],
            [
                "question_id" => 1,
                "title" => "very good",
                "order" => 1,
                'is_correct' => true,
                "lang" => 'en',
                "status_id" => 1,
            ],
            [
                "question_id" => 1,
                "title" => "bad",
                "order" => 3,
                "lang" => 'en',
                "status_id" => 1,
            ],
            [
                "question_id" => 1,
                "title" => "very bad",
                "order" => 4,
                "lang" => 'en',
                "status_id" => 1,
            ],

        ];
        foreach ($items as $item) {
            QuestionOption::create($item);
        }
    }
}
