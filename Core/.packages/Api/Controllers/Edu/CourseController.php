<?php
namespace Api\Controllers\Edu;

use Illuminate\Http\Request;
use Models\Edu\Course;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use OpenApi\Annotations as OA;

/**
 * Class CourseController
 * @package Api\Controllers\Edu
 */
class CourseController extends Controller
{
    /**
     * Store or update a course.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     *
     * @OA\Post(
     *     path="/api/edu/course",
     *     summary="Create or update a course",
     *     tags={"CourseController"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="title", type="string", description="Course title", example="Introduction to Computer Science"),
     *             @OA\Property(property="code", type="string", description="Course code", example="CS101"),
     *             @OA\Property(property="thumbnail", type="string", description="Course thumbnail URL", example="http://example.com/thumbnail.jpg"),
     *             @OA\Property(property="lang", type="string", description="Course language", example="en"),
     *             @OA\Property(property="status_id", type="integer", description="Status ID", example=1),
     *             @OA\Property(property="description", type="string", description="Course description", example="This is a beginner course on computer science."),
     *             @OA\Property(property="system_id", type="integer", description="System ID", example=1),
     *             @OA\Property(property="category_id", type="integer", description="Category ID", example=1),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", description="Course ID", example=1),
     *             @OA\Property(property="title", type="string", description="Course title", example="Introduction to Computer Science"),
     *             @OA\Property(property="code", type="string", description="Course code", example="CS101"),
     *             @OA\Property(property="thumbnail", type="string", description="Course thumbnail URL", example="http://example.com/thumbnail.jpg"),
     *             @OA\Property(property="lang", type="string", description="Course language", example="en"),
     *             @OA\Property(property="status_id", type="integer", description="Status ID", example=1),
     *             @OA\Property(property="description", type="string", description="Course description", example="This is a beginner course on computer science."),
     *             @OA\Property(property="system_id", type="integer", description="System ID", example=1),
     *             @OA\Property(property="category_id", type="integer", description="Category ID", example=1),
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
     *                 "title": {"The title field is required."},
     *                 "code": {"The code field is required."},
     *                 "lang": {"The selected lang is invalid."},
     *                 "status_id": {"The status_id field is required."},
     *                 "system_id": {"The system_id field is required."},
     *                 "category_id": {"The category_id field is required."}
     *             }),
     *         ),
     *     ),
     * )
     */
    public function storeOrUpdate(Request $request)
    {
        $data = $request->all();
        
        // Validating input data
        $validator = Validator::make($data, [
            'title' => 'required|string|max:255',
            'code' => 'required|string|max:100',
            'thumbnail' => 'nullable|string',
            'lang' => 'required|string|in:fa,en,ar',
            'status_id' => 'required|integer',
            'description' => 'nullable|string',
            'system_id' => 'required|integer',
            'category_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $course = Course::updateOrCreate(
            ['code' => $data['code']],
            [
                'title' => $data['title'],
                'thumbnail' => $data['thumbnail'],
                'lang' => $data['lang'],
                'status_id' => $data['status_id'],
                'description' => $data['description'],
                'category_id' => $data['category_id'],
                'system_id' => $data['system_id'],
            ]
        );

        return response()->json($course, 200);
    }
}
