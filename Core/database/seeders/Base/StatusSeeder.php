<?php

namespace Database\Seeders\Base;

use Illuminate\Database\Seeder;
use Models\Base\Status;

class StatusSeeder extends Seeder
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
                "title_fa"=>"وضعیت فعالی",
                "title_en"=>"active status",
                "status_id" => 1
            ],
            [
                "title_fa"=>"وضعیت درخواست",
                "title_en"=>"request status",
                "status_id" => 1
            ],
            [
                "title_fa"=>"وضعیت برگزاری",
                "title_en"=>"holding status",
                "status_id" => 1
            ],
            [
                "title_fa"=>"فعال",
                "title_en"=>"active",
                "group_id" => 1,
                "code"  => 1,
                "color" => "text-theme-10",
                "status_id" => 1
            ],
            [
                "title_fa"=>"غیر فعال",
                "title_en"=>"inactive",
                "group_id" => 1,
                "code"  => 0,
                "color" => "text-theme-24",
                "status_id" => 1
            ],
            // request status for register courses
            
            [
                "title_fa" => "درخواست",
                "title_en" => "requested",
                "group_id" => 2,
                "code"  => 0,
                "color" => "text-theme-26",
                "status_id" => 1
            ],
            [
                "title_fa" => "تأیید شده",
                "title_en" => "accepted",
                "group_id" => 2,
                "code"  => 1,
                "color" => "text-theme-10",
                "status_id" => 1
            ],
            [
                "title_fa" => "عدم تأیید",
                "title_en" => "rejected",
                "group_id" => 2,
                "code"  => 2,
                "color" => "text-theme-22",
                "status_id" => 1
            ],
            [
                "title_fa" => "حذف",
                "title_en" => "deleted",
                "group_id" => 2,
                "code"  => 3,
                "color" => "text-theme-24",
                "status_id" => 1
            ],
            // meeting
            [
                "title_fa"=>"نرمال",
                "title_en"=>"normal",
                "group_id" => 3,
                "code"  => 1,
                "color" => "text-theme-10",
                "status_id" => 1
            ],
            [
                "title_fa"=>"کنسل",
                "title_en"=>"canceled",
                "group_id" => 3,
                "code"  => 0,
                "color" => "text-theme-24",
                "status_id" => 1
            ],
            [
                "title_en"=>"roles"
            ],
            [
                "title_en"=>"teachers",
                "group_id" => 15,
                "code"  => 1
            ],
            [
                "title_en"=>"students",
                "group_id" => 15,
                "code"  => 2
            ],
            [
                "title_en"=>"managers",
                "group_id" => 15,
                "code"  => 3
            ],
            [
                "title_en"=>"mentors",
                "group_id" => 15,
                "code"  => 4
            ],
            [
                "title_en"=>"mentees",
                "group_id" => 15,
                "code"  => 5
            ],
            [
                "title_en"=>"speakers",
                "group_id" => 15,
                "code"  => 6
            ],
            
           
        ];
        foreach($items as $item)
        {
            Status::create($item);
        }
    }
}
