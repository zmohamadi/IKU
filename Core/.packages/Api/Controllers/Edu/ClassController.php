<?php
namespace Api\Controllers\Edu;

use Illuminate\Http\Request;
use Models\Edu\CoursePresented As CourseClass ; // فرض می‌کنیم مدل کلاس CourseClass نام دارد
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

class ClassController extends Controller
{
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
            // 'TeacherPersonId' => 'required|integer',
            'teacher_id' => 'required|integer',
            'status_id' => 'required|integer',
            'date_start' => 'required',
            'date_end' => 'required',
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
                // 'TeacherPersonId' => $classData['TeacherPersonId'],
                'teacher_id' => $classData['teacher_id'],
                'status_id' => $classData['status_id'],
                'date_start' => $classData['date_start'],
                'date_end' => $classData['date_end'],
            ]
        );

        return response()->json($courseClass, 200);
    }
}
