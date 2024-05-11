"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData, useFormRefs, Input, Button, ButtonContainer, CheckBox,Box } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";

export default function Form({id}){
    const {Lang,local,activeLang} = useLang();
    const {laraAdmin } = useConfig();
    const formUrl = "/course-categories" ; 
    let component = useFormRefs();
    let {save, get} = useData();
    let url = laraAdmin+formUrl, method = "new", key = 0;
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    const router = useRouter();
    let uploadUrl=laraAdmin+"/upload/.-media-courseCategories";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-courseCategories";
    let uploadDir='media/courseCategories/';

    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl+"?"+Math.random());
    const back = ()=>router.back();


    return <>
        <Box title={Lang(["public.course_category"])}>
                {activeLang.map((lang, index)=>
                        <Input className={"mb-3 col-span-6 "+lang.dir} label= {"title_"+lang.symbol} labelClassName={lang.dir}
                        refItem={[component, "title_"+lang.symbol]} required="true" />
                
                )}
                <Dropzone className="col-span-6" label="image" refItem={[component, "pic"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir}  />
                <CheckBox label="status"  name={Lang('public.active')} refItem={[component, "status_id"]} />
        </Box>
        <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
        </ButtonContainer>
            </>;
}