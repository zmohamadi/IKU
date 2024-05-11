"use client";
import { FeatherIcon } from "@/Theme/Midone";
import { useConfig } from "@/lib/config";
// import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import Link from "next/link";


export function Mentees({data,title,href,rel}){

    const {Lang,local} = useLang();
    const {mediaPath } = useConfig();

    // console.log(data);

    return<>
            <div class="intro-y flex items-center h-10">
                <h2 class="text-lg font-medium truncate ml-5">
                    {Lang('public.'+title)}
                </h2>
            </div>
            {data?.length>0?
            <div class="mt-5">
                {data?.map((mentee,index)=>{
                    return <div class="intro-y">
                    <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
                        <div class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                            {
                                mentee?.pic ?
                                <img alt='AWA' src={mediaPath+'/users/'+mentee?.pic} />
                                :
                                <img alt='AWA' src={mediaPath+'/users/avatar.png'} />
                            }
                        </div>
                        <div class="ml-4 mr-auto">
                            <div class="font-medium">{mentee.name} {mentee.lname}</div>
                            {
                                mentee?.enroll_requests ?<div class="text-gray-600 text-xs mt-0.5">{mentee?.enroll_requests?.[0]?.created_at}</div>
                                :<div class="text-gray-600 text-xs mt-0.5">{mentee?.mentee_requests?.[0]?.created_at}</div>
                            }
                            
                        </div>
                        {/* <div class="py-1 px-2 rounded-full text-xs bg-theme-10 text-white cursor-pointer font-medium">
                            {Lang('public.edit')}</div> */}
                    </div>
                </div>
                })}
                {/* <Link href={href} className="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-27 dark:border-dark-5 text-theme-28 dark:text-gray-600">
                    {Lang('public.view_more')}
                </Link> */}
                
            </div>
            :
            <a className="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-27 dark:border-dark-5 text-theme-28 dark:text-gray-600">
                {Lang('public.no_data')}
            </a>
            }            
        </>;
}