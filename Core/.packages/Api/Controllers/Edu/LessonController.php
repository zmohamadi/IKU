<?php
namespace Api\Controllers\Edu;

use Illuminate\Http\Request;
use Models\Edu\Lesson;
use Illuminate\Support\Facades\Validator;

class LessonController extends Controller
{
    public function storeOrUpdate(Request $request)
    {
        $data = $request->all();
        
        // Validating input data
        $validator = Validator::make($data, [
            '*.Title' => 'required|string|max:255',
            '*.Code' => 'required|string|max:100',
            '*.Thumbnail' => 'nullable|string',
            '*.Lang' => 'required|string|in:fa,en,ar',
            '*.Status' => 'required|string|in:active,deactive',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $response = [];
        
        foreach ($data as $courseData) {
            $course = Lesson::updateOrCreate(
                ['Code' => $courseData['Code']],
                [
                    'Title' => $courseData['Title'],
                    'Thumbnail' => $courseData['Thumbnail'],
                    'Lang' => $courseData['Lang'],
                    'Status' => $courseData['Status'],
                ]
            );

            // Handling status 'deactive'
            if ($courseData['Status'] === 'deactive') {
                // اقدامات لازم برای وضعیت غیرفعال
            }

            // شما می‌توانید هر گونه اقدامات اضافی برای پردازش دیتابیس‌های مجزا یا بررسی کدهای تکراری را در اینجا اضافه کنید.

            $response[] = ['Code' => $courseData['Code'], 'id' => $course->id];
        }

        return response()->json($response, 200);
    }
}
