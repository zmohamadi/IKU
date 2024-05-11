<?php

$lang = [
   

    // ******************* Courses *************************
    'teacher'=>'Teacher',
    'student'=>'Student',
    'start_date'=>'Start Date',
    'end_date'=>'End Date',
    'registration_end_date'=>'Registration End Date',
    'objectives'=>'Objectives',
    'thumbnail'=>'Thumbnail',
    'top_score'=>'Top Score',
    'average_score'=>'Average Score',
    'duration'=>'Duration',
    'presence_count'=>'Number of Attendees',
    'download_count'=>'Number of Download',
    'size'=>'Size',
    'Student'=>'Student',
    'level'=>'Level',
    'meeting'=>'Meeting',
    'meetings'=>'Meetings',
    'start_hour'=>'Start Time',
    'meet_link'=>'Meeting link',
    'course'=>'Course',
    'views'=>'Views',
    'youtube'=>'Youtube',
    'content'=>'Content',
    'homeworks'=>'Homeworks',
    'homework'=>'Homework',
    'score'=>'Score',
    'correct'=>'Correct',
    'correcting'=>'Correcting',
    'archives'=>'Archives',
    'archive'=>'Archive',
    'mark'=>'Mark',
    'session_managers'=>'Course Coordinators',
    'session_manager'=>'Course Coordinator',
    'all'=>'All',
    'requested'=>'Requested',
    'accepted'=>'Accepted',
    'rejected'=>'Rejected',
    'deleted'=>'Deleted',
    'users'=>'Users',
    'visited'=>'Visited',
    'corrected'=>'Corrected',
    'uncorrected'=>'Unmodified',
    'multiple_choice'=>'Multiple Choice',
    'descriptive'=>'Descriptive',
    'site_texts'=>'Site Setting',
    'keywords'=>'Keywords',
    'keyword'=>'Keyword',
    'change_request'=>'Change Request',
    'request'=>'Request ',
    'You_have_selected_descriptive_type'=>'You have selected descriptive type',
    'date_time_register'=>'Register Date',
    'time_register'=>'Register Time',
    'date_time_holding'=>'Holding Date',
    'time_holding'=>'Holding Time',
    'topic'=>'Categories',
    'room'=>'Room',
    'holding'=>'Holding',
    'room_link'=>'Room Link',
    'is_online'=>'Online',
    'online'=>'Online',
    'offline'=>'Offline',
    'event'=>'Event',
    'biography'=>'Biography',
    'blog'=>'Blog',
    'creator'=>'Creator',
    'editor'=>'Editor',
    'created_at'=>'Created At',
    'comments'=>'Comments',
    'profile' => 'Profile',
    'last_post'=>'Last Post',
    'author'=>'Author',
    'timezone'=>'Timezone',
    'timezones'=>'Timezones',
    'birthdate'=>'Birthdate',
    'code'=>'Code',
    'quiz'=>'Quiz',
    'forum'=>'Forum',
    'survey'=>'Survey',
    'resource'=>'Resource',
    'resources'=>'Resources',
    'notification'=>'Notification',
    'notifications'=>'Notifications',
    'expire_date'=>'Expire',
    'question_type'=>'Question Type',
    'question'=>'Question',
    'questions'=>'Questions',
    'title_en'=>'Title',
    'description_en'=>'Description',
    'display_status'=>'Display Status',
    'display'=>'Display',
    'date_release'=>'Release',
    'date_exp'=>'Expire',
    'reports'=>'Reports',
    'questionTypes'=>'Question Types',
    'questionType'=>'Question Type',
    'edit_title'=>'Edit Title',
    'text_en'=>'Text',
    'caption'=>'Caption',
    'tools_link'=>'Tools',
    'allUsers'=>'All Users',
    'active'=>'Active',
    'is_event_speaker'=>'Is Speaker',
    'is_mentor'=>'Is Mentor',
    'is_mentee'=>'Is Mentee',
    'is_teacher'=>'Is Teacher',
    'event_speaker'=>'Event Speaker',
    'registration_request'=>'Registration Request',
    'im_mentor'=>'I am mentor',
    'im_speaker'=>'I am speaker',
    'new_password_confirmation'=>'Confirm password',
    'change'=>'Change',
    'skills'=>'Skills',
    'home'=>'Home',
    'year'=>'Year',
    'view_more'=>'View More',
    'last_request_in_mentorship'=>'Last Request (Mentorship)',
    'last_request_in_courses'=>'Last Request (Courses)',
    'change_request'=>'Change Request',
    'display_home'=>'Display Home',

    // ******************* Profile *************************
    'from_hour'=>'From hour',
    'to_hour'=>'To hour',
    'mentee_accepted'=>'Mentee accepted',
   
];

$menus = include(__DIR__.'/./menus.php');
$lang = array_merge($lang, $menus);

$login = include(__DIR__.'/./login.php');
$lang = array_merge($lang, $login);

$menus = include(__DIR__.'/./menus.php');
$lang = array_merge($lang, $menus);

$adminPublic = include(__DIR__.'/./admin-public.php');
$lang = array_merge($lang, $adminPublic);

$site = include(__DIR__.'/./site.php');
$lang = array_merge($lang, $site);

if( \App::getLocale() =='en'){
    $lang2 =include(__DIR__.'/./fa-words.php');
    $lang = array_merge($lang, $lang2);
}
 return $lang;
