<?php

namespace Database\Seeders\Base;

use Illuminate\Database\Seeder;
use Models\Base\YearSemester;

class YearSemesterSeeder extends Seeder
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
                "year"=>"1401",
                "semester"=>"نیمسال اول",
                "start_date" => "1401-07-01",
                "end_date" => "1401-10-30",
            ],
            [
                "year"=>"1401",
                "semester"=>"نیمسال دوم",
                "start_date" => "1401-11-01",
                "end_date" => "1401-03-30",
            ],
            [
                "year"=>"1402",
                "semester"=>"نیمسال اول",
                "start_date" => "1402-07-01",
                "end_date" => "1402-10-30",
            ],
            [
                "year"=>"1402",
                "semester"=>"نیمسال دوم",
                "start_date" => "1402-11-01",
                "end_date" => "1402-03-30",
            ],
            [
                "year"=>"1403",
                "semester"=>"نیمسال اول",
                "start_date" => "1403-07-01",
                "end_date" => "1403-10-30",
            ],
            [
                "year"=>"1403",
                "semester"=>"نیمسال دوم",
                "start_date" => "1403-11-01",
                "end_date" => "1403-03-30",
            ],
            
            
           
        ];
        foreach($items as $item)
        {
            YearSemester::create($item);
        }
    }
}
