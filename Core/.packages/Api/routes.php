<?php
    Route::post('users', 'ClassUserController@storeOrUpdate');
    Route::post('courses', 'CourseController@storeOrUpdate');
    Route::post('classes', 'ClassController@storeOrUpdate');
    Route::post('class-users', 'ClassUserController@storeOrUpdate');
?>