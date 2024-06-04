"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { CKEditor } from "@/Theme/Midone/Forms/Ckeditor";
// import { Tools } from "@/Theme/Midone/Utils/Tools";

export default function Form({id})
{
    const {Lang,local} = useLang();
    const {laraAdmin,nextAdmin} = useConfig();
    const component = useFormRefs();
    const router = useRouter();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    const formUrl = "/mentors"; 
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        getNeedles(laraAdmin+formUrl+'/get-needles', setNeedles);
        if(id != 0 && id != undefined) get(url, component, "info");
    }, []);

    let uploadUrl=laraAdmin+"/upload/.-media-users";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-users";
    let uploadDir='media/users/';

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();
    
    return <>
                <Box title={Lang(["public.mentor"])}>
                        <Input type="hidden" refItem={[component, "is_mentor"]} defaultValue="1" />

                        <Input label= "name" className="col-span-4" refItem={[component, "name"]} required="true" />
                        <Input label= "lname" className="col-span-4" refItem={[component, "lname"]} required="true" />
                        <Input label= "email" className="col-span-4" refItem={[component, "email"]} required="true" />
                        <Input className="col-span-4" label= "mobile" refItem={[component, "mobile"]}  />
                        <Input className="col-span-4" label= "work_experience" placeholder={"please enter integer"} refItem={[component, "work_experience"]} required="true" />
                        <Input className="col-span-4"  label= "order" placeholder={"please enter integer"} refItem={[component, "order"]} />
                        <SelectTail label="topic" refItem={[component, "mentorship_topic_id"]} required="true"
                                data={needles?.topic} titleKey={"title_"+local} key={"mentorship_topic_id"+needles?.topic?.length} />
                        <CheckBox className="col-span-3"  label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                        <CheckBox className="col-span-3"   label="event" name={Lang('public.event_speaker')} refItem={[component, "is_event_speaker"]} />
                        <CKEditor  className="col-span-6" refItem={[component, "biography"]} required="true"/>
                        <CKEditor className="col-span-6"  refItem={[component, "skills"]} />
                        <Dropzone className="col-span-6" label="pic"
                        defaultValue={[component?.state?.info?.pic]}
                         refItem={[component, "pic"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                        
                </Box>
                <ButtonContainer>
                        <Button label="back" onClick={back} />
                        <Button label="save" onClick={saveItem} />
                </ButtonContainer>
        </>;
}