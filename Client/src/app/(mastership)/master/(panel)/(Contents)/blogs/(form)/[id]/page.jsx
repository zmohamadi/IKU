"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Box, Button, ButtonContainer, useData, useFormRefs } from "@/Theme/Midone";
import { useRouter } from 'next/navigation';

export default function View({params}){
    const router = useRouter();
    const back = ()=>router.back();
    const {laraAdmin,mediaPath } = useConfig();
    const {Lang,local} = useLang();
    const formUrl = "/blogs" ; 
    const title = "blog" ; 
    let id = params.id , url = laraAdmin+formUrl+"/"+id;
    let component = useFormRefs();
    let {get} = useData();
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;
    return(<>
            <Box cols="grid-cols-1" title={Lang(["public.view", "public."+title])} >
            <div className="intro-y news p-5 mt-8">
                    <h2 className="intro-y font-medium text-xl sm:text-2xl">
                        {data.title}  
                    </h2>
                    <div className="intro-y text-gray-700 dark:text-gray-600 mt-3 text-xs sm:text-sm"> 
                        <span className="mx-1">•</span>{data.created_at}
                        <span className="mx-1">•</span>{data?.subject?.["title_"+local]}
                    </div>
                    <div className="intro-y mt-6">
                        <div className="news__preview image-fit">
                            <img alt={data.title} className="rounded-md" src={mediaPath+"/blogs/"+data.image} />
                        </div>
                    </div>
                    <div className="intro-y flex relative pt-16 sm:pt-6 items-center pb-6">
                        
                        <div className="absolute sm:relative -mt-12 sm:mt-0 w-full flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm">
                            <div className="intro-x mr-1 sm:mr-3"> {Lang('public.comments')}: <span className="font-medium">{data.comments_count}</span> </div>
                            <div className="intro-x mr-1 sm:mr-3"> {Lang('public.view')}: <span className="font-medium">{data.count_view}</span> </div>
                        </div>
                        
                    </div>
                    <div className="intro-y text-justify leading-relaxed">
                        {data.text}                        
                    </div>
                    <div className="intro-y flex text-xs sm:text-sm flex-col sm:flex-row items-center mt-5 pt-5 border-t border-gray-200 dark:border-dark-5">
                        <div className="flex items-center">
                            <div className="w-12 h-12 flex-none image-fit">
                                <img alt="" className="rounded-full" src={mediaPath+"/users/"+data?.creator_admin?.pic} />
                            </div>
                            <div className="mr-3 ml-auto">
                                <a href="" className="font-medium"> {Lang('public.author')}: {data?.creator_admin?.name} {data?.creator_admin?.lname}</a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}