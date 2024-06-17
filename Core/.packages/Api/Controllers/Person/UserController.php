<?php
namespace Api\Controllers\Person;

use Illuminate\Http\Request;
use Models\Person\User;
use Models\Base\System;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function storeOrUpdate(Request $request)
    {
        $data = $request->all();
        
        // Validating input data
        $validator = Validator::make($data, [
            '*.person_id' => 'required|integer',
            '*.firstname' => 'required|string|max:255',
            '*.lastname' => 'required|string|max:255',
            '*.mobile' => 'required|string|max:20|unique:users,Mobile',
            '*.photo' => 'nullable|string',
            '*.email' => 'required|email|unique:users,Email',
            '*.password' => 'required|string|min:8',
            '*.role_id' => 'required|string|in:student,teacher',
            '*.gender_id' => 'required|string|in:male,female',
            '*.status_id' => 'required|string|in:active,deactive',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $response = [];
        
        foreach ($data as $userData) {
            $user = User::updateOrCreate(
                ['person_id' => $userData['person_id']],
                [
                    'firstname' => $userData['firstname'],
                    'lastname' => $userData['lastname'],
                    'mobile' => $userData['mobile'],
                    'photo' => $userData['photo'],
                    'email' => $userData['email'],
                    'password' => Hash::make($userData['password']),
                    'role_id' => $userData['role_id'],
                    'gender_id' => $userData['gender_id'],
                    'status_id' => $userData['status_id'],
                ]
            );

            // Handling status 'deactive'
            if ($userData['status_id'] === 'deactive') {
                // اقدامات لازم برای وضعیت غیرفعال
            }

            // Handling SystemUser table
            SystemUser::updateOrCreate(
                ['person_id' => $userData['person_id']],
                ['user_id' => $user->id]
            );

            $response[] = ['person_id' => $userData['person_id'], 'id' => $user->id];
        }

        return response()->json($response, 200);
    }
    public function list()
    {
        $response = User::get();

        return response()->json($response, 200);
    }
}