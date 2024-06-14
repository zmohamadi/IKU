<?php
namespace Api\Controllers\Person;

use Illuminate\Http\Request;
use Models\Person\User;
use Models\Base\System;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function storeOrUpdate(Request $request)
    {
        $data = $request->all();
        
        // Validating input data
        $validator = Validator::make($data, [
            '*.PersonId' => 'required|integer',
            '*.Firstname' => 'required|string|max:255',
            '*.Lastname' => 'required|string|max:255',
            '*.Mobile' => 'required|string|max:20|unique:users,Mobile',
            '*.Photo' => 'nullable|string',
            '*.Email' => 'required|email|unique:users,Email',
            '*.Password' => 'required|string|min:8',
            '*.Role' => 'required|string|in:student,teacher',
            '*.Gender' => 'required|string|in:male,female',
            '*.Status' => 'required|string|in:active,deactive',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $response = [];
        
        foreach ($data as $userData) {
            $user = User::updateOrCreate(
                ['PersonId' => $userData['PersonId']],
                [
                    'Firstname' => $userData['Firstname'],
                    'Lastname' => $userData['Lastname'],
                    'Mobile' => $userData['Mobile'],
                    'Photo' => $userData['Photo'],
                    'Email' => $userData['Email'],
                    'Password' => Hash::make($userData['Password']),
                    'Role' => $userData['Role'],
                    'Gender' => $userData['Gender'],
                    'Status' => $userData['Status'],
                ]
            );

            // Handling status 'deactive'
            if ($userData['Status'] === 'deactive') {
                // اقدامات لازم برای وضعیت غیرفعال
            }

            // Handling SystemUser table
            SystemUser::updateOrCreate(
                ['PersonId' => $userData['PersonId']],
                ['user_id' => $user->id]
            );

            $response[] = ['PersonId' => $userData['PersonId'], 'id' => $user->id];
        }

        return response()->json($response, 200);
    }
}