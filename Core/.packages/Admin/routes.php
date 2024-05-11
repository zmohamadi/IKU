<?php

Route::get('/user',"Auth\UserInfo@getInfo");
Route::post('/login',"Auth\AuthenticatedController@store");
Route::post('/logout',"Auth\AuthenticatedController@destroy");

Route::get('/langs',function(){
    App::setLocale("en");
    $objects = [
        "public"=>\Lang::get("AdminLang::public"),
        'local'=>\Config::get("app.locale"),
        'langs'=> \Models\Base\Langueage::where('status_id', 1)->get()];
    return response()->json($objects);
});

include(__DIR__.'/../Publics/routes.php');