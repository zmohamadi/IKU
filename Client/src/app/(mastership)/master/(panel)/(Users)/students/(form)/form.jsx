"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";

export default function Form({id})
{
    const {Lang,local} = useLang();
    const {laraAdmin } = useConfig();
    const component = useFormRefs();
    const router = useRouter();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    const formUrl = "/students"; 
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
                <Box title={Lang(["public.user"])}>
                        <Input type="hidden" refItem={[component, "role_id"]} defaultValue="2" />

                        <Input label= "name" refItem={[component, "name"]} required="true" />
                        <Input label= "lname" refItem={[component, "lname"]} required="true" />
                        <SelectTail label="level" refItem={[component, "level_id"]}
                                data={needles?.educationlevel} titleKey={"title_"+local} key={"level_id"+needles?.educationlevel?.length} />
                        <SelectTail label="timezone" refItem={[component, "timezone_id"]}
                                data={needles?.timezone} titleKey={"code"} key={"timezone_id_"+needles?.timezone?.length} />
                        <Input className="col-span-4" label= "email" refItem={[component, "email"]} required="true" />
                        <Input className="col-span-4" label= "mobile" refItem={[component, "mobile"]}  />
                        <Input className="col-span-4" label= "birthdate" refItem={[component, "birthdate"]} required="true" />
                        
                        <Dropzone className="col-span-6" label="pic" refItem={[component, "pic"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir}  />
                        <CheckBox className="col-span-3"  label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                        <CheckBox className="col-span-3"  label="mentorship" name={Lang('public.mentee')} refItem={[component, "is_mentee"]} />

                </Box>
                <ButtonContainer>
                        <Button label="back" onClick={back} />
                        <Button label="save" onClick={saveItem} />
                </ButtonContainer>
        </>;
}