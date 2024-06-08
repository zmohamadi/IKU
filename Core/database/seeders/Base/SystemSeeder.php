<?php

namespace Database\Seeders\Base;

use Illuminate\Database\Seeder;
use Models\Base\System;

class SystemSeeder extends Seeder
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
                "title"=>"سامانه سدف",
                "api_key"=>"123456796",
                "ip"=>"127.0.0.1",
                "domain"=>"www.sadaf.ir",
                "photo"=>"sadaf.png",
                "description"=>"سامانه سدف",
               
            ],
            [
                "title"=>"سامانه گلستان",
                "api_key"=>"1234234567",
                "ip"=>"127.4.3.2",
                "domain"=>"www.golestan.ir",
                "photo"=>"golestan.png",
                "description"=>"سامانه گلستان",
               
            ],
            
           
        ];
        foreach($items as $item)
        {
            System::create($item);
        }
    }
}
