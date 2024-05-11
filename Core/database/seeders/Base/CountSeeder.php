<?php

namespace Database\Seeders\Base;

use Illuminate\Database\Seeder;
use Models\Base\TotalCount;

class CountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ["title"=>"students" , 'count'=>5],
            ["title"=>"teachers", 'count'=>3],
            ["title"=>"manager", 'count'=>3],
            ["title"=>"personnels", 'count'=>3],
            ["title"=>"courses", 'count'=>10],
            ["title"=>"contents", 'count'=>20],
            ["title"=>"quizes", 'count'=>0],
            ["title"=>"homeworks", 'count'=>20],
            ["title"=>"meeting", 'count'=>10],
            ["title"=>"blog", 'count'=>10],
            ["title"=>"keywords", 'count'=>10],
           
        ];
        foreach($items as $item)
        {
            TotalCount::create($item);
        }
    }
}
