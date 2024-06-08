<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Person
            // $this->call(\Database\Seeders\Person\RoleSeeder::class);
            // $this->call(\Database\Seeders\Person\UserSeeder::class);
            // $this->call(\Database\Seeders\Person\TeacherSeeder::class);
            // $this->call(\Database\Seeders\Person\StudentSeeder::class);
        // Edu
            // $this->call(\Database\Seeders\Edu\LessonLevelSeeder::class);
            // $this->call(\Database\Seeders\HomeWork\TypeSeeder::class); 
            // $this->call(\Database\Seeders\Edu\LessonCategorySeeder::class);
            // $this->call(\Database\Seeders\Edu\LessonSeeder::class); 
            // $this->call(\Database\Seeders\Edu\SectionSeeder::class); 
            // $this->call(\Database\Seeders\Edu\MeetingSeeder::class); 
            // $this->call(\Database\Seeders\Edu\MeetingUserSeeder::class); 
            // $this->call(\Database\Seeders\Edu\EnrollSeeder::class); 
            // $this->call(\Database\Seeders\Edu\LessonKeywordSeeder::class); 
            // $this->call(\Database\Seeders\HomeWork\OptionSeeder::class); 
            // $this->call(\Database\Seeders\HomeWork\HomeWorkSeeder::class); 
            // $this->call(\Database\Seeders\HomeWork\AnswerSeeder::class); 

            // $this->call(\Database\Seeders\Forum\SubjectSeeder::class); 
            // $this->call(\Database\Seeders\Forum\PostSeeder::class); 
        // Base
            $this->call(\Database\Seeders\Base\SystemSeeder::class);
            // $this->call(\Database\Seeders\Base\GenderSeeder::class);
            // $this->call(\Database\Seeders\Base\YearSemesterSeeder::class);
            // $this->call(\Database\Seeders\Base\FileCategorySeeder::class);
            // $this->call(\Database\Seeders\Base\KeywordSeeder::class);
            // $this->call(\Database\Seeders\Base\LanguageSeeder::class);
            // $this->call(\Database\Seeders\Base\CountSeeder::class);
            // $this->call(\Database\Seeders\Base\StatusSeeder::class);
            // $this->call(\Database\Seeders\Base\TypeSeeder::class);
       
        // Survey
            // $this->call(\Database\Seeders\Survey\SurveySeeder::class);
            // $this->call(\Database\Seeders\Survey\QuestionSeeder::class);
            // $this->call(\Database\Seeders\Survey\QuestionTypeSeeder::class);
            // $this->call(\Database\Seeders\Survey\QuestionOptionSeeder::class);
            // $this->call(\Database\Seeders\Survey\AnswerSeeder::class);
      
        // Quiz 
            // $this->call(\Database\Seeders\Quiz\AnswerSeeder::class); 
            // $this->call(\Database\Seeders\Quiz\OptionSeeder::class); 
            // $this->call(\Database\Seeders\Quiz\QuestionSeeder::class); 
            // $this->call(\Database\Seeders\Quiz\QuizSeeder::class); 
            // $this->call(\Database\Seeders\Quiz\TypeSeeder::class); 
    }
}
