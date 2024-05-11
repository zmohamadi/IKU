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

Route::get('/home', 'Base\HomeController@home');
// ================ Start Routes Courses =========================================

Route::get("courses/{id}/students", "Edu\CourseController@students");
Route::get("courses/change-status/get-needles", "Edu\CourseController@changeStatusGetNeedles");
Route::post("courses/change-status/{course}/{stu}", "Edu\CourseController@changeStatus");
// Route::put("courses/change-status/{course}/{stu}", "Edu\CourseController@changeStatus");
Route::get("courses/get-needles", "Edu\CourseController@getNeedles");
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

Route::put("/homeworks-answer/{id}/{user}", "Edu\HomeWorkController@setScore");
Route::get("/homeworks-answer/{id}/{user}", "Edu\HomeWorkController@getAsnwer");
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
Route::post("/quiz/attemp/{id}", "Quiz\QuizController@attemp");
Route::post("/quiz/reply/{id}", "Quiz\QuizController@reply");
Route::get("/quiz-list/{id}", "Quiz\QuizController@list");
Route::get("/quiz/get-needles", "Quiz\QuizController@getNeedles");
Route::resource("quiz", "Quiz\QuizController");

Route::get("forum-posts/{id}", "Forum\PostController@list");
Route::get("posts/get-needles", "Forum\PostController@getNeedles");
Route::resource("posts", "Forum\PostController");

Route::get("forum-subjects/{id}", "Forum\SubjectController@list");
Route::get("forum-subjects/get-needles", "Forum\SubjectController@getNeedles");
Route::resource("/post-subjects", "Forum\SubjectController");    

Route::resource("notifications", "Edu\NotificationController");
Route::resource("resources", "Edu\ResourceController");
// ================ Start Routes Base =========================================

Route::resource("timezones","Base\TimezoneController");
Route::resource("keywords","Base\KeywordController");
Route::resource("questionTypes","Base\QuestionTypeController");
// ================ Start Routes Content ==========================================
Route::get("blogs/get-needles", "Content\BlogController@getNeedles");
Route::resource("/blogs", "Content\BlogController");       
Route::get("blog-subjects/get-needles", "Content\BlogSubjectController@getNeedles");
Route::resource("/blog-subjects", "Content\BlogSubjectController");    
Route::put("blog-comments/edit-status-confirm/{id}", "Content\BlogCommentController@editConfirm");
Route::get("blog-comments/get-status-confirm/show/{id}", "Content\BlogCommentController@getConfirmShowConfirm");
Route::resource("/blog-comments", "Content\BlogCommentController");
Route::resource("/contact-us", "Content\ContactUsController"); 
Route::resource("/site-texts", "Content\SiteTextController");
// Route::resource("/sliders", "Content\SliderController");  

// ================ Start Routes Users ==========================================
// Route::get("teachers/get-needles", "Person\TeacherController@getNeedles");
Route::resource("teachers", "Person\TeacherController");
Route::get("students/get-needles", "Person\StudentController@getNeedles");
Route::resource("students", "Person\StudentController");
Route::get("session-managers/get-needles", "Person\SessionManagerController@getNeedles");
Route::resource("session-managers", "Person\SessionManagerController");

Route::get("personnels/get-needles", "Person\PersonnelController@getNeedles");
Route::resource("personnels", "Person\PersonnelController");
// ================ Start Routes EventSpeakers ==========================================
Route::get("speakers/get-needles", "Person\EventSpeakerController@getNeedles");
Route::resource("speakers", "Person\EventSpeakerController");
// ================ End Routes EventSpeakers ==========================================
// ================ Start Routes Events ===============================================
Route::get("events/speakers", "Event\EventController@getSpeakers");
Route::get("events/users", "Event\EventController@getUsers");
Route::get("events/get-needles", "Event\EventController@getNeedles");
Route::resource("events", "Event\EventController");
Route::resource("topics", "Event\TopicController");
// ================ End Routes Events ==========================================

// ================ End Routes Events =================================================
// ================ Start Routes Mentorships ===============================================
Route::get("mentors/calendars", "Mentorship\MentorshipController@mentorCalendars");
Route::get("mentors/requests", "Mentorship\MentorshipController@mentorRequests");
Route::get("mentors/evaluates", "Mentorship\MentorshipController@mentorEvaluates");
Route::get("mentees/calendars", "Mentorship\MentorshipController@menteeCalendars");
Route::get("mentees/requests", "Mentorship\MentorshipController@menteeRequests");
Route::get("mentees/evaluates", "Mentorship\MentorshipController@menteeEvaluates");

Route::get("mentors/get-needles", "Person\MentorController@getNeedles");
Route::resource("mentors", "Person\MentorController");
Route::get("mentees/get-needles", "Person\MenteeController@getNeedles");
Route::resource("mentees", "Person\MenteeController");
Route::resource("mentorship-topics", "Mentorship\TopicController");
Route::get("calendars/requests", "Mentorship\CalendarController@getRequests");
Route::get("calendars/get-needles", "Mentorship\CalendarController@getNeedles");
Route::resource("calendars", "Mentorship\CalendarController");
// ================ End Routes Mentorships =================================================


Route::get("users", "Person\UserController@users");
Route::get("users/change-status/get-needles", "Person\UserController@changeRoleGetNeedles");
Route::post("users/change-status/{id}", "Person\UserController@changeRole");
Route::put("users/change-password", "Person\UserController@changePassword");
