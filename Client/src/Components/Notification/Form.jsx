"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,CheckBox,Box,Textarea,Line, DatePicker } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";

export function Form({laraPath,lesson,id,nextPath=""}){

    const {Lang} = useLang();
    const router = useRouter();
    let component = useFormRefs();
    let {save, get} = useData();
    let formUrl = nextPath+"/lessons/"+lesson+"/tools/notification";
    let url = laraPath+"/notifications?lesson_id="+lesson, method = "new";
    if(id != 0 && id != undefined) url = laraPath+"/notifications/"+id, method = "edit";

    useEffect(() => {
        if(id != 0 && id != undefined) get(url, component, "info");
    }, []);
    
    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();
    let uploadUrl=laraPath+"/upload/.-media-notif";
    let deleteUrl=laraPath+"/deleteFile/.-media-notif";
    let uploadDir='media/notif/';
    // console.log(method);

    return <>
        <Box title={Lang(["public.notification"])}>     
                <Input className="col-span-6" label="title" refItem={[component, "title"]} required="true" />
                <Line />
                <DatePicker  label="date_release" refItem={[component,"date_release"]} required="true" />
                <DatePicker  label="date_exp" refItem={[component,"date_exp"]} required="true" />

                <Textarea className="col-span-6" label="description" refItem={[component, "description"]} required="true" />
                <Dropzone label="thumb" refItem={[component, "thumb"]}
                    uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                <CheckBox className="col-span-6" label="status" name={Lang('public.status')} refItem={[component, "status_id"]} value={0} />        
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>   
        </>;
}