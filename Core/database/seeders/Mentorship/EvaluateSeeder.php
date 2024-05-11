<?php

namespace Database\Seeders\Mentorship;

use Illuminate\Database\Seeder;
use Models\Mentorship\Evaluate;

class EvaluateSeeder extends Seeder
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
                "mentor_id"=>"3",
                "mentee_id"  => "2",
                "score"  => "5",
                "date"  => "2024/03/05 13:50",
            ],
        ];
        foreach($items as $item)
        {
            Evaluate::create($item);
        }
    }
}
