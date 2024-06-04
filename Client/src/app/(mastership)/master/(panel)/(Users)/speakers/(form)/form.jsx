"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
export default function Form({id})
{
    const {Lang} = useLang();
    const {laraAdmin } = useConfig();
    const component = useFormRefs();
    const router = useRouter();
    let {save, get} = useData();
    const formUrl = "/speakers"; 
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        if(id != 0 && id != undefined) get(url, component, "info");
    }, []);

    let uploadUrl=laraAdmin+"/upload/.-media-users";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-users";
    let uploadDir='media/users/';

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();
    
    return <>
                <Box title={Lang(["public.speakers"])}>
                        <Input type="hidden" refItem={[component, "is_event_speaker"]} defaultValue="1" />

                        <Input label= "name" refItem={[component, "name"]} required="true" />
                        <Input label= "lname" refItem={[component, "lname"]} required="true" />
                        <Input label= "email" refItem={[component, "email"]} required="true" />
                        <Input label= "mobile" refItem={[component, "mobile"]}  />
                        {/* <SelectTail label="level" refItem={[component, "level_id"]}
                                data={needles?.educationlevel} titleKey={"title_"+local} key={"level_id"+needles?.educationlevel?.length} />
                        <SelectTail label="timezone" refItem={[component, "timezone_id"]}
                                data={needles?.timezone} titleKey={"title_"+local} key={"timezone_id_"+needles?.timezone?.length} />
                        <Input className="col-span-4" label= "birthdate" refItem={[component, "birthdate"]} required="true" />
                        <Input label= "work_experience" refItem={[component, "work_experience"]} />
                        <Textarea className="col-span-6" refItem={[component, "biography"]} required="true"/>
                        <Textarea className="col-span-6" refItem={[component, "skills"]} />
                        <Textarea className="col-span-6" refItem={[component, "certifications"]} />
                        <Textarea className="col-span-6" refItem={[component, "interest_area"]} />
                        <Textarea className="col-span-6" refItem={[component, "mentorship_objectives"]} /> */}
                        <Dropzone className="col-span-6" label="pic" refItem={[component, "pic"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                        <CheckBox className="col-span-3"  label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                        <CheckBox className="col-span-3"   label="mentorship" name={Lang('public.mentor')} refItem={[component, "is_mentor"]} />
                </Box>
                <ButtonContainer>
                        <Button label="back" onClick={back} />
                        <Button label="save" onClick={saveItem} />
                </ButtonContainer>
        </>;
}