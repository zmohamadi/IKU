"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useData,useFormRefs,Input,Button,ButtonContainer, Box, Textarea } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';

export function Form({toolsId,lesson,fileId,laraPath,nextPath=""}){

    const {Lang} = useLang();
    const router = useRouter();
    let component = useFormRefs();
    let {save, get} = useData();
    let url = laraPath+"/meeting-files", method = "new", key = 0;
    if(fileId != 0 && fileId != undefined) url = laraPath+"/meeting-files/"+fileId, method = "edit";

    useEffect(() => {
        if(toolsId != 0 && toolsId != undefined) get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, nextPath+"/lessons/"+lesson+"/tools/meeting/"+toolsId+"/archives"+"?"+Math.random());
    const back = ()=>router.back();


    return <>
        <Box title={Lang(["public.archive"])}>     
                <Input type="hidden" defaultValue={toolsId} refItem={[component, "meeting_id"]} />
                <Textarea className="col-span-6" required="true" label="link" refItem={[component, "link"]} />
                <Textarea className="col-span-6" required="true" label="description" refItem={[component, "description"]} />
                <Input required="true" label="size" refItem={[component, "size"]} />
                       
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>   
        </>;
}