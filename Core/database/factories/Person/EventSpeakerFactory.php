<?php

namespace Database\Factories\Person;

use Illuminate\Database\Eloquent\Factories\Factory;
use Models\Person\EventSpeaker;

class EventSpeakerFactory extends Factory
{
    protected $model = EventSpeaker::class;
 
    public function definition(): array
    {
        return [
            'name' => fake()->firstNameFemale,
            'lname' => fake()->lastName,
            'password' => fake()->password,
            'email' => fake()->unique()->safeEmail,
            'mobile' => fake()->e164PhoneNumber,
            'is_event_speaker'=>1,
            "pic" => fake()->randomElement(['1.jpg', '2.jpg','3.jpg']),
        ];
    }
}
