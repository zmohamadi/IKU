"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { useRouter } from 'next/navigation';


export default function Form({id}){
    const formUrl = "/personnels"; 
    const {Lang} = useLang();
    const {laraAdmin } = useConfig();
    let component = useFormRefs();
    let {save, get} = useData();
    const router = useRouter();
    let uploadUrl=laraAdmin+"/upload/.-media-users";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-users";
    let uploadDir='media/users/';

    let url = laraAdmin+formUrl, method = "new", key = 0;
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl+"?"+Math.random());
    const back = ()=>router.back();


    return <>
            <Box title={Lang(["public.personnels"])}>
                <Input label="name" refItem={[component, "name"]} required="true"  />
                <Input label="family" refItem={[component, "lname"]} required="true"  />
                <Input label="email" refItem={[component, "email"]} required="true"  />
                <Input label="mobile" refItem={[component, "mobile"]} />
                <Dropzone refItem={[component, "pic"]} uploadUrl={uploadUrl} required="true" deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} />
                <CheckBox label="status"  name={Lang('public.active')} refItem={[component, "status_id"]} />
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
        </>;
}