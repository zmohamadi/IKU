"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Button,ButtonContainer,Textarea,Box,CheckBox } from "@/Theme/Midone/Forms";

export default function Form({id}){
    const {Lang} = useLang();
    const {laraAdmin } = useConfig();
    const formUrl = "/contact-us"; 
    let component = useFormRefs();
    let {save, get} = useData();
    const router = useRouter();
   
    let url = laraAdmin+formUrl, method = "new", key = 0;
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();
    
    return <>
            <Box title={Lang(["public.contact_us"])}>
                <div className="col-span-6">
                    {Lang('public.name')} : <span>{component?.state?.info?.sender_name}</span>
                </div>
                <div className="col-span-6">
                    {Lang('public.email')} : <span>{component?.state?.info?.sender_email}</span>
                </div>
                <div className="col-span-6">
                    {Lang('public.subject')} : <span>{component?.state?.info?.subject}</span>
                </div>
                <div className="col-span-6">
                    {Lang('public.message')} : <span>{component?.state?.info?.comment}</span>
                </div>
                <Textarea className="col-span-12" label="reply" refItem={[component, "c"]} required="true" />
                <CheckBox className="col-span-6" label="status"  name={Lang('public.active')} refItem={[component, "status_id"]} />
            </Box>                
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
        </>;
}