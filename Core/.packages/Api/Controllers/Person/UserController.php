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
        $userData = $request->all();
        
        // Validating input data
        $validator = Validator::make($userData, [
            'person_id' => 'required|integer',
            'code' => 'required|string|max:100',
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'mobile' => 'required|string|max:20|unique:users,Mobile',
            'photo' => 'nullable|string',
            'email' => 'required|email|unique:users,Email',
            'password' => 'required|string',
            'role_id' => 'required',
            'gender_id' => 'required',
            'status_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

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

        return response()->json($user, 200);
    }
    public function list()
    {
        $response = User::get();

        return response()->json($response, 200);
    }
}