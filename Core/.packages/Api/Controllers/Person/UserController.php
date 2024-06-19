<?php
namespace Api\Controllers\Person;

use Illuminate\Http\Request;
use Models\Person\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use OpenApi\Annotations as OA;

/**
 * Class UserController
 * @package Api\Controllers\Person
 */
class UserController extends Controller
{
    /**
     * Store or update a user.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     *
     * @OA\Post(
     *     path="/api/person/user",
     *     summary="Create or update a user",
     *     tags={"UserController"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="person_id", type="integer", description="Person ID", example=1),
     *             @OA\Property(property="code", type="string", description="User code", example="U123"),
     *             @OA\Property(property="firstname", type="string", description="First name", example="John"),
     *             @OA\Property(property="lastname", type="string", description="Last name", example="Doe"),
     *             @OA\Property(property="mobile", type="string", description="Mobile number", example="1234567890"),
     *             @OA\Property(property="photo", type="string", description="Photo URL", example="http://example.com/photo.jpg"),
     *             @OA\Property(property="email", type="string", format="email", description="Email address", example="john.doe@example.com"),
     *             @OA\Property(property="password", type="string", description="Password", example="password123"),
     *             @OA\Property(property="role_id", type="integer", description="Role ID", example=2),
     *             @OA\Property(property="gender_id", type="integer", description="Gender ID", example=1),
     *             @OA\Property(property="status_id", type="integer", description="Status ID", example=1),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", description="User ID", example=1),
     *             @OA\Property(property="person_id", type="integer", description="Person ID", example=1),
     *             @OA\Property(property="firstname", type="string", description="First name", example="John"),
     *             @OA\Property(property="lastname", type="string", description="Last name", example="Doe"),
     *             @OA\Property(property="mobile", type="string", description="Mobile number", example="1234567890"),
     *             @OA\Property(property="photo", type="string", description="Photo URL", example="http://example.com/photo.jpg"),
     *             @OA\Property(property="email", type="string", format="email", description="Email address", example="john.doe@example.com"),
     *             @OA\Property(property="role_id", type="integer", description="Role ID", example=2),
     *             @OA\Property(property="gender_id", type="integer", description="Gender ID", example=1),
     *             @OA\Property(property="status_id", type="integer", description="Status ID", example=1),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             @OA\Property(property="errors", type="object", additionalProperties=@OA\Property(
     *                 type="array",
     *                 @OA\Items(type="string")
     *             ), example={
     *                 "person_id": {"The person_id field is required."},
     *                 "code": {"The code field is required."},
     *                 "firstname": {"The firstname field is required."},
     *                 "lastname": {"The lastname field is required."},
     *                 "mobile": {"The mobile field is required."},
     *                 "email": {"The email field is required."},
     *                 "password": {"The password field is required."},
     *                 "role_id": {"The role_id field is required."},
     *                 "gender_id": {"The gender_id field is required."},
     *                 "status_id": {"The status_id field is required."}
     *             }),
     *         ),
     *     ),
     * )
     */
    public function storeOrUpdate(Request $request)
    {
        $userData = $request->all();
        
        // Validating input data
        $validator = Validator::make($userData, [
            'person_id' => 'required|integer',
            'code' => 'required|string|max:100',
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'mobile' => 'required|string|max:20|unique:users,mobile,' . $userData['person_id'] . ',person_id',
            'photo' => 'nullable|string',
            'email' => 'required|email|unique:users,email,' . $userData['person_id'] . ',person_id',
            'password' => 'required|string',
            'role_id' => 'required|integer',
            'gender_id' => 'required|integer',
            'status_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::updateOrCreate(
            ['person_id' => $userData['person_id']],
            [
                'code' => $userData['code'],
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

    /**
     * List all users.
     *
     * @return \Illuminate\Http\JsonResponse
     *
     * @OA\Get(
     *     path="/api/person/user",
     *     summary="List all users",
     *     tags={"UserController"},
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", description="User ID", example=1),
     *                 @OA\Property(property="person_id", type="integer", description="Person ID", example=1),
     *                 @OA\Property(property="code", type="string", description="User code", example="U123"),
     *                 @OA\Property(property="firstname", type="string", description="First name", example="John"),
     *                 @OA\Property(property="lastname", type="string", description="Last name", example="Doe"),
     *                 @OA\Property(property="mobile", type="string", description="Mobile number", example="1234567890"),
     *                 @OA\Property(property="photo", type="string", description="Photo URL", example="http://example.com/photo.jpg"),
     *                 @OA\Property(property="email", type="string", format="email", description="Email address", example="john.doe@example.com"),
     *                 @OA\Property(property="role_id", type="integer", description="Role ID", example=2),
     *                 @OA\Property(property="gender_id", type="integer", description="Gender ID", example=1),
     *                 @OA\Property(property="status_id", type="integer", description="Status ID", example=1),
     *             ),
     *         ),
     *     ),
     * )
     */
    public function list()
    {
        $response = User::all();

        return response()->json($response, 200);
    }
}
