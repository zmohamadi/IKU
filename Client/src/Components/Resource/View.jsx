"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData,useFormRefs } from "@/Theme/Midone/Utils";
import { Box, Button, ButtonContainer } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';

export function View({laraPath,id,access}){
    const router = useRouter();
    const back = ()=>router.back();
    const {mediaPath} = useConfig();

    const {Lang,local} = useLang();
    const title = "resource"; 
    let component = useFormRefs();
    let {get} = useData();
    let url = laraPath+"/resources/"+id;
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;
    
    return(<>
            <Box cols="grid-cols-1" title={Lang(["public.view", "public."+title])} >
                <h2 className="intro-y font-medium text-xl sm:text-2xl">
                    {data.title}
                </h2>
                <ul>
                    <li>
                        <h4>{Lang(["public.file"])} : <a href={mediaPath+"/resource/"+data.name} target="blank">{Lang(["public.download"])}</a></h4>
                    </li>
                    <li>
                        <h4>{Lang(["public.link"])} : <a className="text-info" href={data.link} target="blank">{data.link}</a></h4>
                    </li>
                    <li>
                        <h4>{Lang(["public.duration"])} : {data.duration}</h4>
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