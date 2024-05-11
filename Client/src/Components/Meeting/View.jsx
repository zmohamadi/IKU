"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { Box, Button, ButtonContainer, useData, useFormRefs } from "@/Theme/Midone";
import { useRouter } from 'next/navigation';

export function View({laraPath,id,access}){
    const router = useRouter();
    const back = ()=>router.back();
    const {Lang,local} = useLang();
    const formUrl = "/meetings" ; 
    const title = "meeting" ; 
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
                        <h4>{Lang(["public.date"])} : {data.date}</h4>
                    </li>
                    <li>
                        <h4>{Lang(["public.start_hour"])} : {data.start_hour}</h4>
                    </li>
                    <li>
                        <h4>{Lang(["public.duration"])} : {data.duration}</h4>
                    </li>
                    <li>
                        <h4>{Lang(["public.meet_link"])} : {data.meet_link}</h4>
                    </li>
                    {access?<li>
                        <h4 className="font-bold">{Lang(["public.status"])} :</h4>  {data?.active_status?.["title_"+local]}
                    </li>
                    :''}
                    
                </ul>
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}