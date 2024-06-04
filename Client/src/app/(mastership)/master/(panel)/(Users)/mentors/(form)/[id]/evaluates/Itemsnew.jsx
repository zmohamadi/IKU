"use client"

import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import Link from "next/link";
import * as Icon from 'react-feather';

export const Items = (item) => {
    const {local,Lang} = useLang();
    const {mediaPath, laraAdmin ,nextAdmin } = useConfig();
    const info = item?.item;
    const mentee = info?.mentee;
    const mentor = info?.mentor;

    return <>
            <div className="relative flex items-center">
                <div className="w-12 h-12 flex-none image-fit">
                    <img alt={mentee?.pic} src={mediaPath+"/users/"+mentee?.pic} className="rounded-full" />
                </div>
                <div className="mr-4 ml-auto">
                    <a href="" className="font-medium">{mentee?.name+" "+mentee?.lname}</a> 
                    <div className="text-gray-600 ml-5 sm:mr-5"l>{mentor.mentorship_topic?.["title_"+local]}</div>
                </div>
                <div className="font-medium text-gray-700 dark:text-gray-500">19+ تومان</div>
            </div>
    </>
}