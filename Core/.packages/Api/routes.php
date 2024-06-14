<?php
    Route::post('users', 'ClassUserController@storeOrUpdate');
    Route::post('lessons', 'LessonController@storeOrUpdate');
    Route::post('classes', 'ClassController@storeOrUpdate');
    Route::post('class-users', 'ClassUserController@storeOrUpdate');
?>