<?php

namespace Database\Factories\Mentorship;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Mentorship\Calendar;

class CalendarFactory extends Factory
{
    protected $model = Calendar::class;
    public function definition(): array
    {
        return [
            "from_hour"  => fake()->time,
            "to_hour"  => fake()->time,
            "date"  => fake()->date,
            "lang"  => "en",
            "status_id" => fake()->numberBetween(0,1),
        ];
    }
}
