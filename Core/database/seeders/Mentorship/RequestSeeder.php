<?php

namespace Database\Seeders\Mentorship;

use Illuminate\Database\Seeder;
use Models\Mentorship\Request;

class RequestSeeder extends Seeder
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
                "calendar_id"=>"1",
                "mentor_id"=>"3",
                "mentee_id"  => "2",
            ],
        ];
        foreach($items as $item)
        {
            Request::create($item);
        }
    }
}
