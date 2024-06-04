'use client'
export const menus = [

    {
        title:"dashboard", icon:"Home", href:"/dashboard"
    },
    {
        title:"courses",icon:"Monitor", open:false, 
        childs:[
            {title:"courses", icon:"PlayCircle", href:"/courses"},
            {title:"categories", icon:"Package", href:"/course-categories"},
            {title:"levels", icon:"Pocket", href:"/course-levels"},
            {title:"education_levels", icon:"Hexagon", href:"/education-levels"},
            {title:"keywords", icon:"Tag", href:"/keywords"},

        ]
    },
    {
        title:"users",icon:"Users", open:false, 
        childs:[
            {title:"students", icon:"Users", href:"/students"},
            {title:"teachers", icon:"User", href:"/teachers"},
            // {title:"session_managers", icon:"UserCheck", href:"/managers"},
            {title:"personnels", icon:"Smile", href:"/personnels"},
        ]
    },
   
];