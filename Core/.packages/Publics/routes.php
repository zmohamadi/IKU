<?php

// ================ Start Routes Uploads =======================================
Route::post('tinyUpload/{dir}', 'Public\Upload@tinyUpload');
Route::post('upload/{dir}', 'Public\Upload@uploadFile');
Route::post('ckupload/{dir}', 'Public\Upload@ckUpload');
Route::get('deleteFile/{dir}/{file}', 'Public\Upload@deleteFile');
// ================ End Routes Uploads =========================================

// Route::resource('/users',"Users");    
// Route::resource('/groups', "Groups");
// Route::resource('/posts', "Posts");

// Route::get('/home', 'Base\HomeController@home');
// ================ Start Routes Courses =========================================

Route::get("courses/{id}/students", "Edu\CourseController@students");
Route::get("courses/report-card/{course}/{stu}", "Edu\CourseController@reportCard");
Route::get("courses/change-status/get-needles", "Edu\CourseController@changeStatusGetNeedles");
Route::post("courses/change-status/{course}/{stu}", "Edu\CourseController@changeStatus");
// Route::put("courses/change-status/{course}/{stu}", "Edu\CourseController@changeStatus");
Route::get("courses/get-needles", "Edu\CourseController@getNeedles");
Route::get("courses/list", "Edu\CourseController@list");
Route::resource("courses", "Edu\CourseController");
Route::resource("course-levels", "Edu\CourseLevelController");
Route::resource("course-categories", "Edu\CourseCategoryController");
Route::resource("education-levels", "Edu\EduLevelController");

// ================ Start Routes Tools Course =========================================

Route::get("meeting/{id}/archives", "Edu\MeetingController@archives");
Route::get("meeting/{id}/students", "Edu\MeetingController@students");
Route::get("meeting-list/{id}", "Edu\MeetingController@list");
Route::get("meetings/get-needles", "Edu\MeetingController@getNeedles");
Route::resource("meetings", "Edu\MeetingController");
Route::resource("meeting-files", "Edu\MeetingFileController");

Route::get("/homeworks-for-attemps/{id}", "Edu\HomeWorkController@showWithAttemps");
Route::put("/homeworks-answer/{id}/{user}", "Edu\HomeWorkController@setScore");
Route::get("/homeworks-answer/{id}/{user}", "Edu\HomeWorkController@getAnswer");
Route::put("/homeworks/reply/{id}", "Edu\HomeWorkController@reply");
Route::get("homework-list/{id}", "Edu\HomeWorkController@list");
Route::get("homework-answers/{toolsId}", "Edu\HomeWorkController@answers");
Route::put("homework-correcting/{tools}/{toolsId}", "Edu\HomeWorkController@correcting");
Route::get("homeworks/get-needles", "Edu\HomeWorkController@getNeedles");
Route::resource("homeworks", "Edu\HomeWorkController");

Route::get("content-visited/{id}", "Edu\SectionController@visits");
Route::get("content-list/{id}", "Edu\SectionController@list");
Route::get("contents/get-needles", "Edu\SectionController@getNeedles");
Route::resource("contents", "Edu\SectionController");

Route::put("/survey/reply/{id}", "Edu\SurveyController@reply");
Route::get("/survey-list/{id}", "Edu\SurveyController@list");
Route::get("/survey/get-needles", "Edu\SurveyController@getNeedles");
Route::resource("survey", "Edu\SurveyController");

Route::put("/quiz-correcting/{tools}/{toolsId}", "Edu\HomeWorkController@correcting");
Route::put("/quiz-attemp/{attempId}", "Quiz\QuizController@setAttemp");
Route::get("/quiz-attemp/{attempId}", "Quiz\QuizController@getAttemp");
Route::get("/quiz-answers/{toolsId}", "Quiz\QuizController@answers");
Route::get("/quiz-list/{id}", "Quiz\QuizController@list");
Route::get("/quiz/get-needles", "Quiz\QuizController@getNeedles");
Route::resource("quiz", "Quiz\QuizController");

Route::post("/quiz/reply/{id}", "Quiz\ReplyController@reply");
Route::get("/quiz/attemp/{id}", "Quiz\ReplyController@attemp");

Route::get("forum-posts/{id}", "Forum\PostController@list");
Route::get("posts/get-needles", "Forum\PostController@getNeedles");
Route::resource("posts", "Forum\PostController");

Route::get("forum-subjects/{id}", "Forum\SubjectController@list");
Route::get("forum-subjects/get-needles", "Forum\SubjectController@getNeedles");
Route::resource("/post-subjects", "Forum\SubjectController");    

Route::resource("notifications", "Edu\NotificationController");
Route::resource("resources", "Edu\ResourceController");
// ================ Start Routes Base =========================================

Route::resource("keywords","Base\KeywordController");
Route::resource("questionTypes","Base\QuestionTypeController");

// ================ Start Routes Users ==========================================
// Route::get("teachers/get-needles", "Person\TeacherController@getNeedles");
Route::get("teachers/get-needles", "Person\TeacherController@getNeedles");
Route::resource("teachers", "Person\TeacherController");
Route::get("students/get-needles", "Person\StudentController@getNeedles");
Route::resource("students", "Person\StudentController");

Route::get("users", "Person\UserController@users");
Route::get("users/get-needles", "Person\UserController@getNeedles");
Route::resource("users", "Person\UserController")->except(['index']);
Route::get("users/change-status/get-needles", "Person\UserController@changeRoleGetNeedles");
Route::post("users/change-status/{id}", "Person\UserController@changeRole");
Route::put("users/change-password", "Person\UserController@changePassword");
