'use client'
// data-feather
export const menus = [

    {
        title:"dashboard", icon:"Home", href:"/dashboard"
    },
    {
        title:"base_info", icon:"Database", open:false, 
        childs:[
            {title:"keywords", icon:"Tag", href:"/keywords"},
            {title:"timezones",icon:"Globe", href:"/timezones"},
            {title:"questionTypes",icon:"HelpCircle", href:"/questionTypes"},
        ]
    },
    {
        title:"courses",icon:"Monitor", open:false, 
        childs:[
            {title:"courses", icon:"PlayCircle", href:"/courses"},
            // {title:"new_registers", icon:"Star", href:"/new-registers"},
            {title:"categories", icon:"Package", href:"/course-categories"},
            {title:"levels", icon:"Pocket", href:"/course-levels"},
            {title:"education_levels", icon:"Hexagon", href:"/education-levels"},
        ]
    },
    {
        title:"events",icon:"Bell", open:false, 
        childs:[
            {title:"events", icon:"Monitor", href:"/events"},
            {title:"topics", icon:"Slack", href:"/topics"},
            {title:"speakers", icon:"Users", href:"/speakers"},

        ]
    },
    {
        title:"mentorship",icon:"Tablet", open:false, 
        childs:[
            {title:"calendars", icon:"Calendar", href:"/calendars"},
            {title:"mentors", icon:"Users", href:"/mentors"},
            {title:"mentees", icon:"Command", href:"/mentees"},
            {title:"topics", icon:"Slack", href:"/mentorship-topics"},
            // {title:"requests", icon:"Bell", href:"/requests"},
        ]
    },
   
    {
        title:"users",icon:"Users", open:false, 
        childs:[
            {title:"allUsers", icon:"Users", href:"/users"},
            {title:"students", icon:"Users", href:"/students"},
            {title:"teachers", icon:"User", href:"/teachers"},
            {title:"session_managers", icon:"UserCheck", href:"/managers"},
            {title:"personnels", icon:"Smile", href:"/personnels"},
        ]
    },
   
    
    // {
    //     title:"surveys",icon:"Monitor", open:false, 
    //     childs:[
    //         {title:"survey", icon:"Monitor", href:"/survey"},
    //         {title:"question", icon:"Monitor", href:"/survey/question"},
    //         {title:"questionType", icon:"Monitor", href:"/survey/question-type"},
    //         {title:"questionOption", icon:"Monitor", href:"/survey/question-option"},

    //     ]
    // },
   
    {
        title:"contents", icon:"PenTool", open:false, 
        childs:[
            {title:"blog", icon:"Clipboard", href:"/blogs"},
            {title:"blog_subject", icon:"Pocket", href:"/blog-subjects"},
            // {title:"blog_comments", icon:"MessageSquare", href:"/blog-comments"},
            // {title:"banners", icon:"webcam", href:"/banners"}, 
            // {title:"banner_positions", icon:"credit", href:"/banner-positions"},
            // {title:"faqs", icon:"help", href:"/faqs"},
            // {title:"faq-subjects", icon:"info", href:"/faq-subjects"},
            // {title:"sliders", icon:"insta", href:"/sliders"},
            {title:"site_texts", icon:"Settings", href:"/site-texts"},
            {title:"contact_us", icon:"MessageCircle", href:"/contact-us"},
        ]
    },
    // {title:"change_pass",icon:"lock", href:"/build"},
];