<?php

namespace Admin\Controllers\Auth;

use App\Http\Controllers\Controller;

class UserInfo extends Controller
{
    public function getInfo(){
        // return response()->json(["user"=>\Auth::guard('admin')->user()]);
        if(\Auth::guard('admin')->user())
            return response()->json(\Auth::guard('admin')->user());
        else
        return response("");
    }
}
