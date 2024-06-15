"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,CheckBox,Box } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";

export function Form({laraPath,course,id,nextPath=""}){

    const {Lang} = useLang();
    const router = useRouter();
    let component = useFormRefs();
    let {save, get} = useData();
    
    let formUrl = nextPath+"/courses/"+course+"/tools/resource";
    let url = laraPath+"/resources?course_id="+course, method = "new";
    if(id != 0 && id != undefined) url = laraPath+"/resources/"+id, method = "edit";

    useEffect(() => {
        if(id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();
    let uploadUrl=laraPath+"/upload/.-media-resource";
    let deleteUrl=laraPath+"/deleteFile/.-media-resource";
    let uploadDir='media/resource/';

    return <>
            <Box title={Lang(["public.resource"])}>     
                <Input label="title" refItem={[component, "title"]} required="true" />
                <Input label="link" refItem={[component, "link"]} required="true" />
                <Input label="duration" refItem={[component, "duration"]} required="true" />
                <Dropzone label="file" refItem={[component, "name"]}
                    uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                <CheckBox className="col-span-6" label="status" name={Lang('public.status')} refItem={[component, "status_id"]} value={0} />        
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>    
        </>;
}