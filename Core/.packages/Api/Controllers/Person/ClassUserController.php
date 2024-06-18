<?php
namespace Api\Controllers\Person;

use Illuminate\Http\Request;
use Models\Edu\Register;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

class ClassUserController extends Controller
{
    public function storeOrUpdate(Request $request)
    {
        $classData = $request->all();
        
        // Validating input data
        $validator = Validator::make($classData, [
            'main_code' => 'required',
            'title' => 'required',
            'user_id' => 'required|integer',
            'year' => 'required|integer',
            'semester' => 'required|integer',
            'group_id' => 'required|string|max:50',
            'status_id' => 'required|string',
            'date_start' => 'required',
            'date_end' => 'required',
            'less_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        
        $courseClass = Register::updateOrCreate(
            // ['less_id' => $classData['less_id']],
            [
                'less_id' => $classData['less_id'],
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

        return response()->json($courseClass, 200);
    }
}
