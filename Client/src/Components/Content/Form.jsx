"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useData,useFormRefs,Input,Button,ButtonContainer,CheckBox, Box } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
import { CKEditor } from "@/Theme/Midone/Forms/Ckeditor";

export function Form({laraPath,course,id,nextPath=""}){
    
    const {Lang} = useLang();
    const router = useRouter();
    let component = useFormRefs();
    let {save, get} = useData();
    let formUrl = "/contents" ; 
    let url = laraPath+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraPath+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        if(id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, nextPath+"/courses/"+course+"/tools/content"+"?"+Math.random());
    const back = ()=>router.back();

    return <>
        <Box title={Lang(["public.content"])}>     
                <Input type="hidden" defaultValue={course} refItem={[component, "course_id"]} />
                <Input required="true" label="title" refItem={[component, "title"]} />
                <Input required="true" label="duration" refItem={[component, "duration"]} />
                <Input required="true" label="youtube" refItem={[component, "youtube"]} />
                <CKEditor required="true" label="description" refItem={[component, "description"]} />
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} value={0} />        
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>   
        </>;
}