<?php

namespace Database\Seeders\Mentorship;

use Illuminate\Database\Seeder;
use Models\Mentorship\Calendar;

class CalendarSeeder extends Seeder
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
                "mentor_id"  => "3",
                "mentee_id"  => "2",
                "from_hour"  => "13:00",
                "to_hour"  => "13:50",
                "date"  => "2024/02/05",
                "lang"  => "en",
                "status_id" => "1"
            ],
        ];
        foreach($items as $item)
        {
            Calendar::create($item);
        }
    }
}
