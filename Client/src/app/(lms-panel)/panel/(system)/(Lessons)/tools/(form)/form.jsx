"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData, useFormRefs, Input, Button, ButtonContainer,Box } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
// import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";

export default function Form({id}){
    const {Lang} = useLang();
    const {laraAdmin } = useConfig();
    const formUrl = "/categories" ; 
    let component = useFormRefs();
    let {save, get} = useData();
    let url = laraAdmin+formUrl, method = "new", key = 0;
    if(id != 0 && id != undefined) url = laraAdmin+"/categories/"+id, method = "edit";
    const router = useRouter();
//     let uploadUrl=laraAdmin+"/upload/.-media-lessonCategories";
//     let deleteUrl=laraAdmin+"/deleteFile/.-media-lessonCategories";
//     let uploadDir='media/lessonCategories/';

    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl+"?"+Math.random());
    const back = ()=>router.back();


    return <>
        <Box title={Lang(["public.category"])}>
                <Input required="true" label="title_fa" refItem={[component, "title_fa"]} />

        </Box>
        <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
        </ButtonContainer>
            </>;
}