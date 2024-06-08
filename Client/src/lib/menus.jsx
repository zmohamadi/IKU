'use client'
export const menus = [

    {
        title:"dashboard", icon:"Home", href:"/dashboard"
    },
    {
        title:"myLessons", icon:"Book", href:"/myLessons"
    },
    {
        title:"myCalendar", icon:"Calendar", href:"/myCalendar"
    },
    {
        title:"base_management",icon:"Server", open:false, 
        childs:[
            {title:"year_semester", icon:"Aperture", href:"/yearSemesters"},
            {title:"guest_systems", icon:"Feather", href:"/systems"},
            // {title:"keywords", icon:"Tag", href:"/keywords"},

        ]
    },
    {
        title:"lesson_management",icon:"Pocket", open:false, 
        childs:[
            {title:"lessons", icon:"Book", href:"/lessons"},
            {title:"classes", icon:"BookOpen", href:"/classes"},
            // {title:"year_semester", icon:"Aperture", href:"/yearSemesters"},
            {title:"lesson_categories", icon:"Package", href:"/categories"},
            // {title:"tools", icon:"Package", href:"/tools"}, هنوز کار نشده!!

        ]
    },
    {
        title:"quiz_management",icon:"PenTool", open:false, 
        childs:[
            {title:"quizs", icon:"BookOpen", href:"/quizs"}

        ]
    },
    {
        title:"onlineClass_management",icon:"Clock", open:false, 
        childs:[
            {title:"onlineClasses", icon:"Book", href:"/onlineClasses"}

        ]
    },
    {
        title:"users_management",icon:"Shield", open:false, 
        childs:[
            {title:"users", icon:"Users", href:"/users"},
            {title:"teachers", icon:"Users", href:"/teachers"},
            {title:"students", icon:"Users", href:"/students"},
            {title:"personnels", icon:"Users", href:"/personnels"},
            {title:"roles", icon:"Framer", href:"/roles"},
            {title:"access", icon:"Settings", href:"/access"},
        ]
    },
    {
        title:"reports",icon:"Monitor", open:false, 
        childs:[
            {title:"reports", icon:"Monitor", href:"/reports"},

        ]
    },
    {
        title:"edit_profile", icon:"User", href:"/editProfile"
    },
    {
        title:"change_password", icon:"Lock", href:"/changePassword"
    },
   
];