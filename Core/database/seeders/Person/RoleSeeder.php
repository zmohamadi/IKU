<?php

namespace Database\Seeders\Person;

use Illuminate\Database\Seeder;
use Models\Person\Role;

class RoleSeeder extends Seeder
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
                "title_en"=>"personnel",
                "title_fa"=>"پرسنل",
            ],
            [
                "title_en"=>"teacher",
                "title_fa"=>"استاد",
            ],
            [
                "title_en"=>"student",
                "title_fa"=>"دانشجو",
            ],  
        ];
        foreach($items as $item)
        {
            Role::create($item);
        }
    }
}
