"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/lib/auth";

export default function Form(){
    const {Lang, local} = useLang();
    const {mediaPath, laraAdmin, nextAdmin} = useConfig();
    const {user} = useAuth({guard: "admin"});
    const router = useRouter();
    let component = useFormRefs();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();

    let uploadUrl = laraAdmin+"/upload/.-media-users";
    let deleteUrl = laraAdmin+"/deleteFile/.-media-users";
    let uploadDir = 'media/users/';
    
    const id = user?.id;
    let url = laraAdmin+"/users", method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+"/users/"+id, method = "edit";

    useEffect(() => {
        getNeedles(laraAdmin+'/users/get-needles', setNeedles);
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, "/");
    const back = ()=>router.back();

    return <>
            <Box title={Lang(["public.personnels"])}>
                <Input label="name" refItem={[component, "firstname"]} required="true" />
                <Input label="family" refItem={[component, "lastname"]} required="true" />
                <SelectTail className="col-span-4" label="gender" refItem={[component, "gender_id"]}
                    data={needles?.gender} titleKey={"title_"+local} required="true" />
                <Input className="col-span-4" label="mobile" refItem={[component, "mobile"]} required="true" />
                <Input className="col-span-4" label="email" refItem={[component, "email"]} required="true" />
                <Dropzone refItem={[component, "photo"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
        </>;
}