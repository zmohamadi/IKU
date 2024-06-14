<?php

namespace Database\Seeders\Survey;

use Illuminate\Database\Seeder;
use Models\Edu\Survey\Question;

class QuestionSeeder extends Seeder
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
                "survey_id" => 1,
                "title" => "How good was the teacher's teaching?",
                "question_type_id" => 1,
                "lang" => 'en',
                "status_id" => 1,
            ],

        ];
        foreach ($items as $item) {
            Question::create($item);
        }
    }
}
