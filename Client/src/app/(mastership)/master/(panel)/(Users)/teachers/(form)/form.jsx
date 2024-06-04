"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox, SelectTail } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { CKEditor } from "@/Theme/Midone/Forms/Ckeditor";
import { Select } from "@/Theme/Midone/Forms/Select";

export default function Form({id})
{
    const {Lang} = useLang();
    const {laraAdmin } = useConfig();
    const component = useFormRefs();
    const router = useRouter();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    const formUrl = "/teachers"; 
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
                <Box title={Lang(["public.teacher"])}>
                        <Input type="hidden" refItem={[component, "role_id"]} defaultValue="1" />
                        <Input type="hidden" refItem={[component, "is_teacher"]} defaultValue="1" />

                        <Input label= "name" refItem={[component, "name"]} required="true" />
                        <Input label= "lname" refItem={[component, "lname"]} required="true" />
                        <Input label= "email" refItem={[component, "email"]} required="true" />
                        <Input label= "mobile" refItem={[component, "mobile"]} />
                        <SelectTail required="true"  label="timezone" refItem={[component, "timezone_id"]}
                                data={needles?.timezone} titleKey={"code"} key={"timezone_id_"+needles?.timezone?.length} />
                        <Select required="true" label="gender"  refItem={[component, "gender_id"]}
                            defaultValue={component?.state?.info?.gender_id} >
                               <option key="0" value="1"> {Lang(["public.male"])} </option>
                               <option key="0" value="0"> {Lang(["public.female"])} </option>
                        </Select>

                        <CKEditor className="col-span-6" refItem={[component, "address"]} required="true"/>
                        <CKEditor className="col-span-6" refItem={[component, "biography"]} required="true"/>
                        <Dropzone className="col-span-6" label="pic" refItem={[component, "pic"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                        <CheckBox className="col-span-2"  label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                        <CheckBox className="col-span-2"  label="mentorship" name={Lang('public.mentor')} refItem={[component, "is_mentor"]} />
                        <CheckBox className="col-span-2"  label="event" name={Lang('public.event_speaker')} refItem={[component, "is_event_speaker"]} />
                </Box>
                <ButtonContainer>
                        <Button label="back" onClick={back} />
                        <Button label="save" onClick={saveItem} />
                </ButtonContainer>
        </>;
}