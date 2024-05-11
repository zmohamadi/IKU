<?php

namespace Admin\Controllers\Base;
use App\Http\Controllers\Controller;
use Models\Person\Mentor;
use Models\Person\User;
class HomeController extends Controller
{
    public function home()
    {
        $collection = [
                    'counts' => \DB::table('base_counts')->get(),
                    'mentees' => User::whereHas('menteeRequests',function($q){$q->where('confirm_status_id',0);})
                    ->with('menteeRequests')->active()->select('id','name','lname','pic')->limit(5)->get(),
                    'enroll' => User::whereHas('enrollRequests',function($q){$q->where('status_id',0);})
                    ->with('enrollRequests')->active()->select('id','name','lname','pic')->limit(5)->get(),

                    // 'mentor' => Mentor::active()->select('id','name','lname','pic')->limit(5)->get(),
                    ];

        return response()->json($collection);

    }
}
