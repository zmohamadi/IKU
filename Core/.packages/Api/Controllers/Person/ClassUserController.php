<?php
namespace Api\Controllers\Person;

use Illuminate\Http\Request;
use Models\Edu\Register as ClassUser;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

class ClassUserController extends Controller
{
    public function storeOrUpdate(Request $request)
    {
        $data = $request->all();
        
        // Validating input data
        $validator = Validator::make($data, [
            '*.PersonId' => 'required|integer',
            '*.Code' => 'required|string|max:100',
            '*.Year' => 'required|integer',
            '*.Semester' => 'required|integer',
            '*.Group' => 'required|string|max:50',
            '*.Status' => 'required|string|in:active,deactive',
            '*.DateStart' => 'required|date',
            '*.DateEnd' => 'required|date|after_or_equal:DateStart',
            '*.Title' => 'required|string|max:255',
            '*.MainCode' => 'required|string|max:100',
            '*.LessID' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get year and semester from the first element
        $year = $data[0]['Year'];
        $semester = $data[0]['Semester'];

        // Delete all existing records for the given year and semester
        ClassUser::where('Year', $year)->where('Semester', $semester)->delete();

        $response = [];
        
        foreach ($data as $classUserData) {
            $classUser = ClassUser::create([
                'PersonId' => $classUserData['PersonId'],
                'Code' => $classUserData['Code'],
                'Year' => $classUserData['Year'],
                'Semester' => $classUserData['Semester'],
                'Group' => $classUserData['Group'],
                'Status' => $classUserData['Status'],
                'DateStart' => $classUserData['DateStart'],
                'DateEnd' => $classUserData['DateEnd'],
                'Title' => $classUserData['Title'],
                'MainCode' => $classUserData['MainCode'],
                'LessID' => $classUserData['LessID'],
                'Role' => $classUserData['Role'] ?? 'student', // Default to 'student' if not provided
            ]);

            $response[] = ['LessID' => $classUserData['LessID'], 'id' => $classUser->id];
        }

        return response()->json($response, 200);
    }
}
