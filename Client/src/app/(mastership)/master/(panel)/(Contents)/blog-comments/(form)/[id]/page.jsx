"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { Box, Button, ButtonContainer, useData, useFormRefs } from "@/Theme/Midone";

export default function View({params}){
    const router = useRouter();
    const back = ()=>router.back();

    const {laraAdmin } = useConfig();
    const {Lang,local} = useLang();
    const formUrl = "/blog-comments" ; 
    const title = "comment" ; 
    const id = params.id;
    let url = laraAdmin+formUrl+"/"+id;
    let component = useFormRefs();
    let {get} = useData();
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;
    return(<>
            <Box cols="grid-cols-1" title={Lang(["public.view", "public."+title])} >
                <h2 className="intro-y font-medium text-xl sm:text-2xl">
                    {data?.subject}  
                </h2>
                <ul>
                    <li>
                        <h4 className="font-bold">{Lang(["public.name"])} :</h4> {data?.sender_name}
                    </li>
                    
                    <li>
                        <h4 className="font-bold">{Lang(["public.email"])} : </h4> {data?.sender_email}
                    </li>
                    <li>
                        <h4 className="font-bold">{Lang(["public.comment"])} : </h4> {data?.comment}
                    </li>
                    
                    <li>
                        <h4 className="font-bold">{Lang(["public.reply"])} : </h4> {data?.reply}
                    </li>
                    
                    <li>
                        <h4 className="font-bold">{Lang(["public.status"])} :</h4>  {data?.active_status?.["title_"+local]}
                    </li>
                    
                </ul>
              
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}