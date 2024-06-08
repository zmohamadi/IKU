"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useData,useFormRefs,Input,Button,ButtonContainer,CheckBox, Box, DatePicker, TimePicker } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';

export function Form({laraPath,lesson,id,nextPath=""}){
    
    const {Lang} = useLang();
    const router = useRouter();
    let component = useFormRefs();
    let {save, get} = useData();
    let formUrl = laraPath+"/meetings" ; 
    let url = formUrl, method = "new", key = 0;
    if(id != 0 && id != undefined) url = formUrl+"/"+id, method = "edit";

    useEffect(() => {
        if(id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, nextPath+"/lessons/"+lesson+"/tools/meeting"+"?"+Math.random());
    const back = ()=>router.back();

    return <>
        <Box title={Lang(["public.meeting"])}>     
                <Input type="hidden" defaultValue={lesson} refItem={[component, "lesson_id"]} />
                <Input required="true" label="title" refItem={[component, "title"]} />
                <DatePicker  label="date" refItem={[component,"date"]} required="true" />
                <TimePicker  label="start_hour" refItem={[component, "start_hour"]} required="true" />
                <Input required="true" label="duration" refItem={[component, "duration"]} />
                <Input required="true" label="meet_link" refItem={[component, "meet_link"]} />
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} value={0} />        
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>   
        </>;
}