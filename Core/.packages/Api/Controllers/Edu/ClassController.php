<?php
namespace Api\Controllers\Edu;

use Illuminate\Http\Request;
use Models\Edu\CoursePresented as CourseClass; // فرض می‌کنیم مدل کلاس CourseClass نام دارد
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use OpenApi\Annotations as OA;

/**
 * Class ClassController
 * @package Api\Controllers\Edu
 */
class ClassController extends Controller
{
    /**
     * Store or update a course class.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     *
     * @OA\Post(
     *     path="/api/edu/class",
     *     summary="Create or update a course class",
     *     tags={"ClassController"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="code", type="string", description="Class code", example="CS101"),
     *             @OA\Property(property="year", type="integer", description="Class year", example=2024),
     *             @OA\Property(property="semester", type="integer", description="Class semester", example=1),
     *             @OA\Property(property="group_id", type="string", description="Group ID", example="G1"),
     *             @OA\Property(property="system_id", type="string", description="System ID", example="SYS001"),
     *             @OA\Property(property="teacher_id", type="integer", description="Teacher ID", example=10),
     *             @OA\Property(property="status_id", type="integer", description="Status ID", example=1),
     *             @OA\Property(property="date_start", type="string", format="date", description="Start date", example="2024-09-01"),
     *             @OA\Property(property="date_end", type="string", format="date", description="End date", example="2025-01-15"),
     *             @OA\Property(property="less_id", type="integer", description="Lesson ID", example=1001),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", description="Class ID", example=1),
     *             @OA\Property(property="code", type="string", description="Class code", example="CS101"),
     *             @OA\Property(property="year", type="integer", description="Class year", example=2024),
     *             @OA\Property(property="semester", type="integer", description="Class semester", example=1),
     *             @OA\Property(property="group_id", type="string", description="Group ID", example="G1"),
     *             @OA\Property(property="system_id", type="string", description="System ID", example="SYS001"),
     *             @OA\Property(property="teacher_id", type="integer", description="Teacher ID", example=10),
     *             @OA\Property(property="status_id", type="integer", description="Status ID", example=1),
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
     *                 "code": {"The code field is required."},
     *                 "year": {"The year field is required."},
     *                 "semester": {"The semester field is required."},
     *                 "group_id": {"The group_id field is required."},
     *                 "system_id": {"The system_id field is required."},
     *                 "teacher_id": {"The teacher_id field is required."},
     *                 "status_id": {"The status_id field is required."},
     *                 "date_start": {"The date_start field is required."},
     *                 "date_end": {"The date_end field is required."},
     *                 "less_id": {"The less_id field is required."},
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
            'code' => 'required|string|max:100',
            'year' => 'required|integer',
            'semester' => 'required|integer',
            'group_id' => 'required|string',
            'system_id' => 'required|string',
            'teacher_id' => 'required|integer',
            'status_id' => 'required|integer',
            'date_start' => 'required|date',
            'date_end' => 'required|date',
            'less_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $courseClass = CourseClass::updateOrCreate(
            ['less_id' => $classData['less_id']],
            [
                'code' => $classData['code'],
                'year' => $classData['year'],
                'semester' => $classData['semester'],
                'group_id' => $classData['group_id'],
                'system_id' => $classData['system_id'],
                'teacher_id' => $classData['teacher_id'],
                'status_id' => $classData['status_id'],
                'date_start' => $classData['date_start'],
                'date_end' => $classData['date_end'],
            ]
        );

        return response()->json($courseClass, 200);
    }
}
