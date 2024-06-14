"use client"

import { useLang } from "@/lib/lang";
import {useConfig} from "@/lib/config";
import Link from "next/link";
import * as Icon from 'react-feather';

export const Items = ({nextPath,item}) => {
    const {mediaPath} = useConfig();
    const {Lang} = useLang();
   

    return <>
       <div className="intro-y blog col-span-12 md:col-span-4 box">
            <div className="blog__preview image-fit">
                <img src={mediaPath+"/courses/"+item.thumbnail} alt={item?.title} />
            </div>
            {/* <img src={mediaPath+"/users/"+item.thumbnail} width={100} height={100} alt="thumbnail" /> */}

            <div className="pt-5 font-medium text-xl pl-5 pr-5 text-gray-700 dark:text-gray-600">
                {item?.title}
            </div>
            <div className="p-5 text-gray-700 dark:text-gray-600" dangerouslySetInnerHTML={{ __html: item?.description.substring(0, 250)+"..." }}>
            </div>
            
            <div className="flex items-center px-5 py-3 border-t border-gray-200 dark:border-dark-5">
               
                
                <div className="flex text-gray-600 text-xs sm:text-sm ml-auto">
                    <div className="ml-2"> {Lang('public.course_code')}: <span className="font-medium">{item.code}</span> </div>
                </div>
                <Link href={nextPath+"/courses/"+item.id+"/tools"}
                    className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2 tooltip" 
                    title={Lang('public.tools')}>
                    <Icon.Settings className="w-3 h-3" />
                </Link>
                <Link href={nextPath+"/courses/"+item.id}
                    className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2 tooltip" 
                    title={Lang('public.view')}>
                    <Icon.Eye className="w-3 h-3" />
                </Link>
                
                
               
            </div>
            
        </div>
    </>
}