"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { FeatherIcon, Tools, useData,useFormRefs } from "@/Theme/Midone/Utils";
import { Box, Button, ButtonContainer } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
import { Show } from "../Public/Question/Show";

export function View({laraPath,id,access}){
    const router = useRouter();
    const back = ()=>router.back();

    const {Lang,local} = useLang();
    let component = useFormRefs();
    let {get} = useData();
    let url = laraPath+"/homeworks/"+id;
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;
    //console.log(data);
    
    return(<>
            <Box cols="grid-cols-1" title={data.title} >
               
                <div class="col-span-12">
                    <div class="grid grid-cols-12">
                        <div class="col-span-4">
                            <span className="font-bold">{Lang(["public.date"])} :</span>  {data?.start_date} / {data?.expire_date}
                        </div>
                        
                        <div class="col-span-4">
                            <span className="font-bold">{Lang(["public.created_at"])} :</span>  {data?.created_at}
                        </div>
                        
                        <div class="col-span-4">
                            <span className="font-bold">{Lang(["public.creator"])} :</span>  {data.creator?.name} {data.creator?.lname}
                        </div>
                        {access?<div class="col-span-4">
                            <span className="font-bold">{Lang(["public.status"])} :</span>  {data?.active_status?.["title_"+local]}
                        </div>:''}
                        <div class="col-span-12">
                            <span className="font-bold">{Lang(["public.description"])} :</span>  <div  dangerouslySetInnerHTML={{ __html: data.description }}></div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12">
                    <Show data={data} />
                </div>
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}