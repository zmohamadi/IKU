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
            // 'Code' => 'required|string|max:100',
            'year' => 'required|integer',
            'semester' => 'required|integer',
            'group_id' => 'required|string|max:50',
            // 'TeacherPersonId' => 'required|integer',
            'status_id' => 'required|string',
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
                // 'Code' => $classData['Code'],
                'year' => $classData['year'],
                'semester' => $classData['semester'],
                'group_id' => $classData['group_id'],
                // 'TeacherPersonId' => $classData['TeacherPersonId'],
                'status_id' => $classData['status_id'],
                'date_start' => $classData['date_start'],
                'date_end' => $classData['date_end'],
            ]
        );

        return response()->json($courseClass, 200);
    }
}
