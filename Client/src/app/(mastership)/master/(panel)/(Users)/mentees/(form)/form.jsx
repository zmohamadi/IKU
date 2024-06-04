"use client";
import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Textarea,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
// import { Tools } from "@/Theme/Midone/Utils/Tools";

export default function Form({id})
{
    const {Lang,local} = useLang();
    const {laraAdmin } = useConfig();
    const component = useFormRefs();
    const router = useRouter();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    const formUrl = "/mentees"; 
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
                <Box title={Lang(["public.mentee"])}>
                        <Input label= "name" refItem={[component, "name"]} required="true" />
                        <Input label= "lname" refItem={[component, "lname"]} required="true" />
                        <Input label= "email" refItem={[component, "email"]} required="true" />
                        <Input label= "mobile" refItem={[component, "mobile"]}  />
                        <SelectTail label="level" refItem={[component, "level_id"]} required="true"
                                data={needles?.educationlevel} titleKey={"title_"+local} key={"level_id"+needles?.educationlevel?.length} />
                        <SelectTail label="timezone" refItem={[component, "timezone_id"]} required="true"
                                data={needles?.timezone} titleKey={"title_"+local} key={"timezone_id_"+needles?.timezone?.length} />
                        <Input label= "birthdate" refItem={[component, "birthdate"]} />
                        {/* <Input label= "work_experience" refItem={[component, "work_experience"]} />
                        <Textarea className="col-span-6" refItem={[component, "biography"]} required="true"/>
                        <Textarea className="col-span-6" refItem={[component, "skills"]} />
                        <Textarea className="col-span-6" refItem={[component, "certifications"]} />
                        <Textarea className="col-span-6" refItem={[component, "interest_area"]} /> */}
                        <CheckBox className="col-span-6"  label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                        <Textarea className="col-span-6" refItem={[component, "mentorship_objectives"]} />
                        <Textarea className="col-span-6" refItem={[component, "interest_area"]} />
                        <Dropzone className="col-span-6" label="pic" refItem={[component, "pic"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                </Box>
                <ButtonContainer>
                        <Button label="back" onClick={back} />
                        <Button label="save" onClick={saveItem} />
                </ButtonContainer>
        </>;
}