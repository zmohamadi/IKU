<?php
namespace Api\Controllers\Edu;

use Illuminate\Http\Request;
use App\Models\CoursePresented As CourseClass ; // فرض می‌کنیم مدل کلاس CourseClass نام دارد
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

class ClassController extends Controller
{
    public function storeOrUpdate(Request $request)
    {
        $data = $request->all();
        
        // Validating input data
        $validator = Validator::make($data, [
            '*.Code' => 'required|string|max:100',
            '*.Year' => 'required|integer',
            '*.Semester' => 'required|integer',
            '*.Group' => 'required|string|max:50',
            '*.TeacherPersonId' => 'required|integer',
            '*.Status' => 'required|string|in:active,deactive',
            '*.DateStart' => 'required|date',
            '*.DateEnd' => 'required|date|after_or_equal:DateStart',
            '*.LessID' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $response = [];
        
        foreach ($data as $classData) {
            $courseClass = CourseClass::updateOrCreate(
                ['LessID' => $classData['LessID']],
                [
                    'Code' => $classData['Code'],
                    'Year' => $classData['Year'],
                    'Semester' => $classData['Semester'],
                    'Group' => $classData['Group'],
                    'TeacherPersonId' => $classData['TeacherPersonId'],
                    'Status' => $classData['Status'],
                    'DateStart' => $classData['DateStart'],
                    'DateEnd' => $classData['DateEnd'],
                ]
            );

            // Handling status 'deactive'
            if ($classData['Status'] === 'deactive') {
                // اقدامات لازم برای وضعیت غیرفعال
            }

            $response[] = ['LessID' => $classData['LessID'], 'id' => $courseClass->id];
        }

        return response()->json($response, 200);
    }
}
