"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData, useFormRefs, Input, Button, ButtonContainer, CheckBox,Box } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';

export default function Form({id}){
    const {Lang,local,activeLang} = useLang();
    const {laraAdmin } = useConfig();
    const formUrl = "/course-levels" ; 
    let component = useFormRefs();
    let {save, get} = useData();
    let url = laraAdmin+formUrl, method = "new", key = 0;
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    const router = useRouter();


    useEffect(() => {
        get(url, component, "info");
    }, []);

    useEffect(() => {
        get(url, component, "info");
    }, [id]);

    const saveItem = ()=>save(url, component, method, formUrl+"?"+Math.random());
    const back = ()=>router.back();


    return <>
        <Box title={Lang(["public.course_levels"])}>
        {activeLang.map((lang, index)=>
                        <Input className={"mb-3 col-span-6 "+lang.dir} label= {"title_"+lang.symbol} labelClassName={lang.dir}
                        refItem={[component, "title_"+lang.symbol]} required="true" />
                
                )}
                <CheckBox label="status"  name={Lang('public.active')} refItem={[component, "status_id"]} />
        </Box>
        <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
        </ButtonContainer>
            </>;
}