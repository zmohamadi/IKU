"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { Box, Button, ButtonContainer, useData, useFormRefs } from "@/Theme/Midone";
import { useRouter } from 'next/navigation';

export function View({laraPath,id,access}){
    const router = useRouter();
    const back = ()=>router.back();
    const {Lang,local} = useLang();
    const formUrl = "/contents" ; 
    const title = "content" ; 
    let url = laraPath+formUrl+"/"+id;
    let component = useFormRefs();
    let {get} = useData();
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;
    return(<>
            <Box cols="grid-cols-1" title={Lang(["public.view", "public."+title])} >
                <h2 className="intro-y font-medium text-xl sm:text-2xl">
                    {data.title}  
                </h2>
                <ul>
                    <li>
                        <h4 className="font-bold">{Lang(["public.description"])} :</h4>
                        <div  dangerouslySetInnerHTML={{ __html: data.description }}></div>
                    </li>
                    
                    <li>
                        <h4 className="font-bold">{Lang(["public.duration"])} : </h4> {data.duration}
                    </li>
                    
                    <li>
                        <h4 className="font-bold">{Lang(["public.status"])} :</h4>  {data?.active_status?.["title_"+local]}
                    </li>
                    
                </ul>
                
                <iframe width="560" height="315" 
                    src={data.youtube} 
                    // title={data.title} 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}