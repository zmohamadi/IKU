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
        //     $this->call(\Database\Seeders\Person\RoleSeeder::class);
        //     // $this->call(\Database\Seeders\Person\UserSeeder::class);
        //     $this->call(\Database\Seeders\Person\TeacherSeeder::class);
        //     // $this->call(\Database\Seeders\Person\StudentSeeder::class);
        // // Edu
        //     $this->call(\Database\Seeders\Edu\CourseLevelSeeder::class);
        //     $this->call(\Database\Seeders\HomeWork\TypeSeeder::class); 
            // $this->call(\Database\Seeders\Edu\CourseCategorySeeder::class);
            // $this->call(\Database\Seeders\Edu\CourseSeeder::class); 
            // $this->call(\Database\Seeders\Edu\SectionSeeder::class); 
            // $this->call(\Database\Seeders\Edu\MeetingSeeder::class); 
            // $this->call(\Database\Seeders\Edu\MeetingUserSeeder::class); 
            // $this->call(\Database\Seeders\Edu\EnrollSeeder::class); 
            // $this->call(\Database\Seeders\Edu\CourseKeywordSeeder::class); 
            // $this->call(\Database\Seeders\HomeWork\OptionSeeder::class); 
            // $this->call(\Database\Seeders\HomeWork\HomeWorkSeeder::class); 
            // $this->call(\Database\Seeders\HomeWork\AnswerSeeder::class); 

            // $this->call(\Database\Seeders\Forum\SubjectSeeder::class); 
            // $this->call(\Database\Seeders\Forum\PostSeeder::class); 
        // // Base
            $this->call(\Database\Seeders\Base\YearSemesterSeeder::class);
        //     $this->call(\Database\Seeders\Base\FileCategorySeeder::class);
        //     $this->call(\Database\Seeders\Base\KeywordSeeder::class);
        //     $this->call(\Database\Seeders\Base\CountrySeeder::class);
        //     $this->call(\Database\Seeders\Base\LanguageSeeder::class);
        //     $this->call(\Database\Seeders\Base\CountSeeder::class);
        //     $this->call(\Database\Seeders\Base\StatusSeeder::class);
        //     // $this->call(\Database\Seeders\Base\TypeSeeder::class);
        //     // $this->call(\Database\Seeders\Base\CitySeeder::class);
        //     // $this->call(\Database\Seeders\Base\ProvinceSeeder::class);
        // // Content
        //     $this->call(\Database\Seeders\Content\BlogSeeder::class);
        //     $this->call(\Database\Seeders\Content\BlogSubjectSeeder::class);
        //     $this->call(\Database\Seeders\Content\ContactUsSeeder::class);
        //     // $this->call(\Database\Seeders\Content\SiteTextSeeder::class);
        //     // $this->call(\Database\Seeders\Content\SliderSeeder::class);
        //     // $this->call(\Database\Seeders\Content\FaqCategorySeeder::class);
        //     // $this->call(\Database\Seeders\Content\FaqSeeder::class);
        //     // $this->call(\Database\Seeders\Content\BannerPositionSeeder::class);
        //     // $this->call(\Database\Seeders\Content\BannerSeeder::class);
        // // Survey
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
