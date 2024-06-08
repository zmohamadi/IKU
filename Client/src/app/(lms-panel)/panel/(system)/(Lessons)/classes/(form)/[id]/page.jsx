"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Box, Button, ButtonContainer, useData, useFormRefs } from "@/Theme/Midone";
import { useRouter } from 'next/navigation';

export default function View(){
    const router = useRouter();
    const back = ()=>router.back();
    const {mediaPath } = useConfig();
    const {Lang,local} = useLang();
    const formUrl = "/classes" ; 
    const title = "class" ; 
    let url = laraAdmin+formUrl+"/"+id;
    let component = useFormRefs();
    let {get} = useData();
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info?.lesson;
    let LessonClass = component?.state?.info;
    return(<>
            <Box cols="grid-cols-1" title={Lang(["public.view", "public."+title])} >
            <div className="intro-y news">
                    <h2 className="intro-y font-medium text-xl sm:text-2xl">
                        {data.title}  
                    </h2>
                    <div className="intro-y text-gray-700 dark:text-gray-600 mt-3 text-xs sm:text-sm"> 
                        <span className="mx-1">•</span>{data.code}
                        <span className="mx-1">•</span>{data?.category?.["title_"+local]}
                        <span className="mx-1">•</span>{data?.system?.title}
                    </div>
                    <div className="intro-y mt-6">
                        <div className="news__preview image-fit" style={{ height: '300px',width:"400px" ,textAlign:"center" }}>
                            <img  alt={data.title} className="rounded-md" src={mediaPath+"/lessons/"+data.thumbnail} />
                        </div>
                    </div>
                    
                    <h2 className="intro-y font-medium text-xl sm:text-2xl mt-2">
                        {Lang('public.description')} : 
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: data.description }} className="intro-y text-justify leading-relaxed">
                    </div>
                    <table>
                        <teach>
                            <th></th>
                        </teach>
                        <body>
                            
                        </body>
                    </table>
                </div>
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}