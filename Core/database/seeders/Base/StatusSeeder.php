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
            ]
           
        ];
        foreach($items as $item)
        {
            Status::create($item);
        }
    }
}
