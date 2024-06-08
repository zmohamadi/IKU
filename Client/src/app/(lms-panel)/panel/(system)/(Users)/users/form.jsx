"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { useRouter } from 'next/navigation';

export default function Form({id, link="/users", roleFilter=""}){
    const {Lang, local} = useLang();
    const {mediaPath, laraAdmin, nextAdmin} = useConfig();
    const router = useRouter();
    let component = useFormRefs();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();

    let uploadUrl = laraAdmin+"/upload/.-media-users";
    let deleteUrl = laraAdmin+"/deleteFile/.-media-users";
    let uploadDir = 'media/users/';

    let url = laraAdmin+link, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+link+"/"+id, method = "edit";

    useEffect(() => {
        getNeedles(laraAdmin+'/users/get-needles', setNeedles);
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, link);
    const back = ()=>router.back();

    let roles = needles?.role;
    if(roleFilter != "") roles = needles?.role?.filter((role, i)=>role.id == roleFilter)

    return <>
            <Box title={Lang(["public.personnels"])}>
                <Input label="name" refItem={[component, "firstname"]} required="true" />
                <Input label="family" refItem={[component, "lastname"]} required="true" />
                <SelectTail label="gender" refItem={[component, "gender_id"]}
                    data={needles?.gender} titleKey={"title_"+local} required="true" />
                <SelectTail label="role" refItem={[component, "role_id"]}
                    data={roles} titleKey={"title_"+local} required="true" />
                <Input label="personID" refItem={[component, "person_id"]} />
                <Input label="studentID" refItem={[component, "studentID"]} />
                <Input label="mobile" refItem={[component, "mobile"]} required="true" />
                <Input label="email" refItem={[component, "email"]} required="true" />
                <Dropzone refItem={[component, "photo"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
        </>;
}