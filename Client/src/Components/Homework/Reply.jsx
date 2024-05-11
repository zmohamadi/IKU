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
    let url = laraPath+"/homeworks/"+id;
    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = () => save(laraPath+"/homeworks/reply/"+id, component, "edit", nextPath+"/courses/"+course+"/tools/homework"+"?"+Math.random());

    let uploadUrl=laraPath+"/upload/.-media-homework";
    let deleteUrl=laraPath+"/deleteFile/.-media-homework";
    let uploadDir='media/homework/';

    let data = component?.state?.info;
    return(<>
            <Box cols="grid-cols-1" title={data.title} >
            
            <p>
            <h4 className="font-bold">{Lang(["public.description"])} :</h4>  {data?.description}
            </p>
            <Input type="hidden" value={course} refItem={[component, "course_id"]} />


            <Answer questions={data?.questions} component={component}/>

                
            
        </Box>
        <ButtonContainer>
            <Button label="back" onClick={back} />
            {
                data?.answer?.length==0 ? <Button label="save" onClick={saveItem} /> : ''
            }
        </ButtonContainer>
    </>
);
}