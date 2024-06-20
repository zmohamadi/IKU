<?php
    Route::get('hello', function(){
        // dd('hi');
        return view("vendor.l5-swagger.index");
    });
    Route::get('users-list', 'Person\UserController@list');
    Route::post('users', 'Person\UserController@storeOrUpdate');
    Route::post('class-users', 'Person\ClassUserController@storeOrUpdate');

    Route::post('courses', 'Edu\CourseController@storeOrUpdate');
    Route::post('classes', 'Edu\ClassController@storeOrUpdate');
?>