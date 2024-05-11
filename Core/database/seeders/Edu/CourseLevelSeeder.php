<?php

namespace Database\Seeders\Edu;

use Illuminate\Database\Seeder;
use Models\Edu\CourseLevel;

class CourseLevelSeeder extends Seeder
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
                "title_en" => "Beginning",
                
            ],
            [
                "title_en" => "Basic Level",
                
            ],
            [
                "title_en" => "Iner Level",
                
            ],
            [
                "title_en" => "Advance",
                
            ],
            
            
        ];
        foreach($items as $item)
        {
            CourseLevel::create($item);
        }
    }
}
