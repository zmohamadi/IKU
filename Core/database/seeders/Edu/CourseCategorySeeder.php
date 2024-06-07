<?php

namespace Database\Seeders\Edu;

use Illuminate\Database\Seeder;
use Models\Edu\CourseCategory;
use Models\Edu\CourseLevel;
use Models\Edu\Course;
use Models\Edu\Notif\Notification;
use Models\Edu\Resource\Resource;
use Models\Edu\Meet\Meeting;
use Models\Edu\Section\Section;
use Models\Edu\HomeWork\HomeWork;
use Models\Edu\HomeWork\Option;
use Models\Edu\HomeWork\HomeWorkAnswer;
use Models\Edu\HomeWork\Answer;
use Models\Base\Keyword;
use Models\Person\Student;
use Models\Person\SessionManager;
use Models\Person\Teacher;
use Models\Edu\Survey\Survey;
use Models\Edu\Survey\Question;
use Models\Edu\Survey\QuestionOption;
use Models\Edu\Forum\Subject;
use Models\Edu\Forum\Post;

// use Database\Factories\CourseFactory;

class CourseCategorySeeder extends Seeder
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
                "title_fa"=>"فلسفه",
                "status_id"=>1
            ],
            [
                "title_fa"=>"علوم اسلامی",
                "status_id"=>1
            ],
            [
                "title_fa"=>"اخلاق",
                "status_id"=>1
            ],
            [
                "title_fa"=>"تاریخ اسلام",
                "status_id"=>1
            ],
          
            
           
        ];
        foreach($items as $item)
        {
            YearSemester::create($item);
        }

        // $teach = Teacher::factory()->create();
        // $level = CourseLevel::factory()->create();

        // CourseCategory::factory()
        // ->has(
        //     Course::factory()
        //     ->has(Meeting::factory()
        //             ->has(Student::factory()
        //             ->count(1), 'students')
        //     ->count(1), 'meetings')
        //     ->has(Section::factory()
        //             ->has(Student::factory()
        //             ->count(1), 'visits')
        //     ->count(1), 'contents')
        //     ->has(Notification::factory()
        //     ->count(1), 'notifs')
            
        //     ->has(Resource::factory()
        //     ->count(1), 'resources')
            
        //     ->has(Survey::factory()
        //         ->has(
        //             Question::factory()
        //                 ->has(QuestionOption::factory()
        //                 ->count(4), 'questionOptions')
        //             ->count(3), 'questions'
        //         )
        //     ->count(1),'surveys')

        //     ->has(Subject::factory()
        //         ->has(
        //             Post::factory()
        //             ->count(3), 'posts'
        //         )
        //     ->count(1),'forumSubjects')

        //     ->has(HomeWork::factory()
        //             ->has(Option::factory()->count(2), 'options')
        //             // ->has(Answer::factory()->count(1), 'answers')
        //             ->hasAttached(HomeWorkAnswer::factory()->count(1),[
        //                         "mark" => fake()->numberBetween(1,10),
        //                         "answer" => fake()->word(5,10)],'userAnswers')
        //     ->count(1), 'homeworks')

        //     // ->for($teach,'teach')
        //     ->has(Keyword::factory()->count(1))
        //     ->hasAttached(Student::factory()->count(1),['role_id' => 2,'status_id' => fake()->numberBetween(0,3)],'students')
        //     ->hasAttached(SessionManager::factory()->count(1),['role_id' => 3],'managers')
        //     ->count(1), 'courses'
        // )
        // ->count(5)->create();
    }
}
