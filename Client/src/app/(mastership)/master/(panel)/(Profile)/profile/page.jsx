"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useAuth } from "@/lib/auth";
import { useData,useFormRefs,Input,Button,ButtonContainer,Box } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";

export default function page(){
    const {Lang} = useLang();
    const {laraAdmin} = useConfig();
    const formUrl = "/personnels"; 
    const {user} = useAuth({guard: "admin"});
    const id = user?.id;
    let component = useFormRefs();
    let {save, get} = useData();
    let uploadUrl=laraAdmin+"/upload/.-media-users";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-users";
    let uploadDir='media/users/';

    let url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        get(url, component, "info");
    }, []);
    
    const saveItem = ()=>save(url, component, method, "/dashboard");

    return <>
            <Box title={Lang(["public.personnels"])}>
                <Input label="name" refItem={[component, "name"]} required="true"/>
                <Input label="family" refItem={[component, "lname"]} required="true" />
                <Input label="mobile" refItem={[component, "mobile"]} />
                <Input label="whatsapp" refItem={[component, "whatsapp"]} />
                <Input label="email" refItem={[component, "email"]} required="true" />
                <Dropzone refItem={[component, "pic"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} />
            </Box>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
        </>;
}