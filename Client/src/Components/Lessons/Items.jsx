"use client"

import { useData } from "@/Theme/Midone/Utils/Data";
import { useLang } from "@/lib/lang";
import {useConfig} from "@/lib/config";
import Link from "next/link";
import * as Icon from 'react-feather';
import { useAuth } from "@/Theme/Site/Components/Auth/auth";

export const Items = ({laraPath, nextPath, access, formUrl,item}) => {
    const {user} = useAuth({middleware: 'auth'});
    // console.log(nextPath);
    const {mediaPath} = useConfig();
    const {Lang,local} = useLang();
    const {destroy} = useData();
    // console.log(item?.students?.[0]?.pivot?.status_id);
    let statusEnroll = item?.enroll?.[0]?.status_id;
    let statusEnrollTitle = item?.enroll?.[0]?.req_status?.['title_'+local];
    if(user.id==item.instructor_id) statusEnroll=1;

    return <>
       <div className="intro-y blog col-span-12 md:col-span-4 box">
            <div className="blog__preview image-fit">
                <img src={mediaPath+"/lesson/"+item.thumbnail} alt={item?.title} />
            </div>
            <div className="pt-5 font-medium text-xl pl-5 pr-5 text-gray-700 dark:text-gray-600">
                {item?.title}
            </div>
            <div className="p-5 text-gray-700 dark:text-gray-600" dangerouslySetInnerHTML={{ __html: item?.description.substring(0, 250)+"..." }}>
                {/* {item?.description.substring(0, 250)+"..."} */}
            </div>
            
            <div className="flex items-center px-5 py-3 border-t border-gray-200 dark:border-dark-5">
               
                
                <div className="flex text-gray-600 text-xs sm:text-sm mr-auto">
                    
                    <div className="mr-2"> {Lang('public.view')}: <span className="font-medium">{item.count_view}</span> </div>
                    {statusEnroll!=1?<div className="mr-2 text-theme-22"> {Lang('public.registration_request')}: <span className="font-medium">{statusEnrollTitle}</span> </div>:""}
                </div>
                {
                    statusEnroll==1?<><Link href={nextPath+"/lessons/"+item.id+"/tools"}
                    className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2 tooltip" 
                    title={Lang('public.tools')}>
                    <Icon.Settings className="w-3 h-3" />
                </Link></> : <>
                <Link href={"#"}
                    className="intro-x w-8 h-8 flex text-theme-22 items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2 tooltip" 
                    title={Lang('public.tools')}>
                    <Icon.Settings className="w-3 h-3" />
                </Link>
                {/* <span>request status : {statusEnrollTitle}</span> */}
                </>
                }
                
                <Link href={nextPath+"/lessons/"+item.id}
                    className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2 tooltip" 
                    title={Lang('public.view')}>
                    <Icon.Eye className="w-3 h-3" />
                </Link>
                {/* <Link href={nextPath+"/lessons/"+item.id+"/tools/survey"}
                    className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2 tooltip" 
                    title={Lang('public.survey')}>
                    <Icon.ThumbsUp className="w-3 h-3" />
                </Link> */}
                {access?<>
                    <Link href={nextPath+"/lessons/"+item.id+"/edit"}
                        className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2 tooltip" 
                        title={Lang('public.edit')}>
                        <Icon.Edit className="w-3 h-3" />
                    </Link>
                    {/* <Link href={nextPath+"/lessons/"+item.id+"/students/all"}
                        className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2 tooltip" 
                        title={Lang('public.users')}>
                        <Icon.Users className="w-3 h-3" />
                    </Link> */}
                    <Link href="#" onClick={()=>destroy(laraPath+"/contents/"+item.id)}
                        className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2 tooltip" 
                        title={Lang('public.delete')}>
                        <Icon.XOctagon className="w-3 h-3" color="darkred"/>
                    </Link>
                </>
                :""}
               
            </div>
            
        </div>
    </>
}