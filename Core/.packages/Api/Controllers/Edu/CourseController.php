<?php
namespace Api\Controllers\Edu;

use Illuminate\Http\Request;
use Models\Edu\Course;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

class CourseController extends Controller
{
    public function storeOrUpdate(Request $request)
    {
        $data = $request->all();
        
        // Validating input data
        $validator = Validator::make($data, [
            'title' => 'required|string|max:255',
            // 'Code' => 'required|string|max:100',
            'thumbnail' => 'nullable|string',
            'lang' => 'required|string|in:fa,en,ar',
            'status_id' => 'required',
            // 'system_id'=>'required',
            // 'description'=>'required',
            // 'category_id'=>'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        
            $course = Course::updateOrCreate(
                // ['Code' => $data['Code']],
                [
                    'title' => $data['title'],
                    'thumbnail' => $data['thumbnail'],
                    'lang' => $data['lang'],
                    'status_id' => $data['status_id'],
                ]
            );

           

        return response()->json($course, 200);
    }
}
