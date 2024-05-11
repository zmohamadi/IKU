"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { CKEditor } from "@/Theme/Midone/Forms/Ckeditor";

export default function Form({id})
{
    const {Lang} = useLang();
    const {laraAdmin } = useConfig();
    const component = useFormRefs();
    const router = useRouter();
    let {save, get} = useData();
    const formUrl = "/session-managers"; 
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        if(id != 0 && id != undefined) get(url, component, "info");
    }, []);

    let uploadUrl=laraAdmin+"/upload/.-media-users";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-users";
    let uploadDir='media/users/';

    const saveItem = ()=>save(url, component, method, "/managers"+"?"+Math.random());
    const back = ()=>router.back();
    
    return <>
                <Box title={Lang(["public.session_managers"])}>
                        <Input label= "name" refItem={[component, "name"]} required="true" />
                        <Input label= "lname" refItem={[component, "lname"]} required="true" />
                        <Input label= "email" refItem={[component, "email"]} required="true" />
                        <Input label= "mobile" refItem={[component, "mobile"]} />
                        <CKEditor className="col-span-6" refItem={[component, "biography"]} required="true"/>
                        <Dropzone label="pic" refItem={[component, "pic"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                        <CheckBox className="col-span-4"  label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                        <CheckBox className="col-span-4" label="mentorship" name={Lang('public.mentor')} refItem={[component, "is_mentor"]} />
                        <CheckBox className="col-span-4" label="event" name={Lang('public.event_speaker')} refItem={[component, "is_event_speaker"]} />
                </Box>
                <ButtonContainer>
                        <Button label="back" onClick={back} />
                        <Button label="save" onClick={saveItem} />
                </ButtonContainer>
        </>;
}