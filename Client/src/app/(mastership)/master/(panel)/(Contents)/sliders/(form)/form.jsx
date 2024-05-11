"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Textarea,Box,CheckBox } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";

export default function Form({id}){
    const {Lang} = useLang();
    const formUrl = "/sliders";
    let component = useFormRefs();
    const {laraAdmin } = useConfig();
    const router = useRouter();
    let {save, get} = useData();
    let url = laraAdmin+formUrl, method = "new", key = 0;
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    let uploadUrl=laraAdmin+"/upload/.-media-sliders";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-sliders";
    let uploadDir='media/sliders/';

    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return <>
            <Box title={Lang(["public.sliders"])}>
                <Input label="title" refItem={[component, "title"]} required="true" />
                <Input label="title2" refItem={[component, "title2"]} />
                <Input label="link" refItem={[component, "link"]} />
                <Input label="order" refItem={[component, "order"]} required="true" />
                <Textarea className="col-span-6" label="text" refItem={[component, "text"]} />
                <Dropzone refItem={[component, "image"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                <CheckBox className="col-span-6" label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                <CheckBox className="col-span-6" label="type" name={Lang('public.mobile_size')} refItem={[component, "mobile"]} />
            </Box>                
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
        </>;
}