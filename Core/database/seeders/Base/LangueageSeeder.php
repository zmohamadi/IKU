<?php

namespace Database\Seeders\Base;

use Illuminate\Database\Seeder;
use Models\Base\Langueage;

class LangueageSeeder extends Seeder
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
                "title"=>"English",
                "symbol"  => "en",
                "dir"  => "ltr",
                "currency"  => "Dollar",
                "icon"  => "en.png",
                "status_id" => "1"
            ],
            [
                "title"=>"فارسی",
                "symbol"  => "fa",
                "dir"  => "rtl",
                "currency"  => "Toman",
                "icon"  => "fa.png",
                "status_id" => "1"
            ],
            
            // [
            //     "title"=>"عربی",
            //     "symbol"  => "ar",
            //     "dir"  => "rtl",
            //     "currency"  => "Dinar",
            //     "icon"  => "ar.png",
            //     "status_id" => "1"
            // ],
        ];
        foreach($items as $item)
        {
            Langueage::create($item);
        }
    }
}
