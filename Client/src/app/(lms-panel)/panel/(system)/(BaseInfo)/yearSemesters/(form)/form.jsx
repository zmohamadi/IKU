"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box } from "@/Theme/Midone/Forms";

export default function Form({id}){
    const { Lang } = useLang();
    const { laraAdmin } = useConfig();
    let { save, get } = useData();
    let component = useFormRefs();
    const router = useRouter();
    const formUrl = "/yearSemesters"; 
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    
    useEffect(()=>{
        if(id != 0) get(url, component, "info");
    }, [id]);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return <>
            <Box title={Lang(["public.year_semester"])}>     
                <Input required="true" label="year" refItem={[component, "year"]} />
                <Input label="semester" refItem={[component, "semester"]} />
                <Input label="start_date" refItem={[component, "start_date"]} />
                <Input label="end_date" refItem={[component, "end_date"]} />
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>        
        </>;
}