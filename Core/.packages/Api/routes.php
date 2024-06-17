<?php
    Route::get('hello', function(){
        dd('hi');
    });
    Route::get('users-list', 'Person\UserController@list');
    Route::post('users', 'Person\UserController@storeOrUpdate');
    Route::post('courses', 'CourseController@storeOrUpdate');
    Route::post('classes', 'ClassController@storeOrUpdate');
    Route::post('class-users', 'ClassUserController@storeOrUpdate');
?>