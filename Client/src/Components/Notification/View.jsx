"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useData,useFormRefs } from "@/Theme/Midone/Utils";
import { Box, Button, ButtonContainer } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';

export function View({laraPath,id,access}){
    const router = useRouter();
    const back = ()=>router.back();

    const {Lang,local} = useLang();
    const title = "notification"; 
    let component = useFormRefs();
    let {get} = useData();
    let url = laraPath+"/notifications/"+id;
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;
    
    return(<>
            <Box cols="grid-cols-1" title={Lang(["public.view", "public."+title])} >
                <h2 className="intro-y font-medium text-xl sm:text-2xl">
                    {data.title}
                </h2>
                <ul>
                    <li>
                        <h4>{Lang(["public.date_release"])} : {data.date_release}</h4>
                    </li>
                    <li>
                        <h4>{Lang(["public.date_exp"])} : {data.date_exp}</h4>
                    </li>
                    <li>
                        <h4>{Lang(["public.description"])} : {data.description}</h4>
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