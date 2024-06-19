<?php
namespace Api\Controllers\Person;

use Illuminate\Http\Request;
use Models\Edu\Register;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use OpenApi\Annotations as OA;

/**
 * Class ClassUserController
 * @package Api\Controllers\Person
 */
class ClassUserController extends Controller
{
    /**
     * Store or update a class user.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     *
     * @OA\Post(
     *     path="/api/person/class-user",
     *     summary="Create or update a class user",
     *     tags={"ClassUserController"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="main_code", type="string", description="Main code of the class", example="CS101"),
     *             @OA\Property(property="title", type="string", description="Title of the class", example="Introduction to Computer Science"),
     *             @OA\Property(property="user_id", type="integer", description="User ID", example=123),
     *             @OA\Property(property="year", type="integer", description="Year", example=2024),
     *             @OA\Property(property="semester", type="integer", description="Semester", example=1),
     *             @OA\Property(property="group_id", type="string", description="Group ID", example="G1"),
     *             @OA\Property(property="status_id", type="string", description="Status ID", example="active"),
     *             @OA\Property(property="date_start", type="string", format="date", description="Start date", example="2024-09-01"),
     *             @OA\Property(property="date_end", type="string", format="date", description="End date", example="2025-01-15"),
     *             @OA\Property(property="less_id", type="integer", description="Lesson ID", example=1001),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", description="Register ID", example=1),
     *             @OA\Property(property="main_code", type="string", description="Main code of the class", example="CS101"),
     *             @OA\Property(property="title", type="string", description="Title of the class", example="Introduction to Computer Science"),
     *             @OA\Property(property="user_id", type="integer", description="User ID", example=123),
     *             @OA\Property(property="year", type="integer", description="Year", example=2024),
     *             @OA\Property(property="semester", type="integer", description="Semester", example=1),
     *             @OA\Property(property="group_id", type="string", description="Group ID", example="G1"),
     *             @OA\Property(property="status_id", type="string", description="Status ID", example="active"),
     *             @OA\Property(property="date_start", type="string", format="date", description="Start date", example="2024-09-01"),
     *             @OA\Property(property="date_end", type="string", format="date", description="End date", example="2025-01-15"),
     *             @OA\Property(property="less_id", type="integer", description="Lesson ID", example=1001),
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
     *                 "main_code": {"The main_code field is required."},
     *                 "title": {"The title field is required."},
     *                 "user_id": {"The user_id field is required."},
     *                 "year": {"The year field is required."},
     *                 "semester": {"The semester field is required."},
     *                 "group_id": {"The group_id field is required."},
     *                 "status_id": {"The status_id field is required."},
     *                 "date_start": {"The date_start field is required."},
     *                 "date_end": {"The date_end field is required."},
     *                 "less_id": {"The less_id field is required."}
     *             }),
     *         ),
     *     ),
     * )
     */
    public function storeOrUpdate(Request $request)
    {
        $classData = $request->all();
        
        // Validating input data
        $validator = Validator::make($classData, [
            'main_code' => 'required|string|max:100',
            'title' => 'required|string|max:255',
            'user_id' => 'required|integer',
            'year' => 'required|integer',
            'semester' => 'required|integer',
            'group_id' => 'required|string|max:50',
            'status_id' => 'required|string|max:50',
            'date_start' => 'required|date',
            'date_end' => 'required|date',
            'less_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $register = Register::updateOrCreate(
            ['less_id' => $classData['less_id']],
            [
                'main_code' => $classData['main_code'],
                'title' => $classData['title'],
                'user_id' => $classData['user_id'],
                'year' => $classData['year'],
                'semester' => $classData['semester'],
                'group_id' => $classData['group_id'],
                'status_id' => $classData['status_id'],
                'date_start' => $classData['date_start'],
                'date_end' => $classData['date_end'],
            ]
        );

        return response()->json($register, 200);
    }
}
