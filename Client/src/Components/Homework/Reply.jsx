"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { Tools, useData,useFormRefs } from "@/Theme/Midone/Utils";
import { Box, Button, ButtonContainer, Input, Radio, Textarea } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { Answer } from "../Public/Question/Answer";

export function Reply({laraPath,course,id,nextPath=""}){
    const router = useRouter();
    const back = ()=>router.back();

    const {Lang} = useLang();
    let component = useFormRefs();
    let {get,save} = useData();
    // let url = laraPath+"/homeworks-for-attemps/"+id;
    let url = laraPath+"/homeworks/"+id;
    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = () => save(laraPath+"/homeworks/reply/"+id, component, "edit", nextPath+"/courses/"+course+"/tools/homework"+"?"+Math.random());

    let uploadUrl=laraPath+"/upload/.-media-homework";
    let deleteUrl=laraPath+"/deleteFile/.-media-homework";
    let uploadDir='media/homework/';

    let data = component?.state?.info;
//    console.log(data);
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
            <Input type="hidden" value={course} refItem={[component, "course_id"]} />

            <div class="col-span-12">
                <Answer questions={data?.questions} component={component}/>
            </div>
                
            
        </Box>
        <ButtonContainer>
            <Button label="back" onClick={back} />
            {
                data?.time==true ? <Button label="save" onClick={saveItem} /> : ''
            }
        </ButtonContainer>
    </>
);
}