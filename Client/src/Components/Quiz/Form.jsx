"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useRouter } from 'next/navigation';
import { useData, useFormRefs, SelectTail, Input, Button, ButtonContainer, Box, CheckBox, TimePicker, DatePicker } from "@/Theme/Midone/Forms";
import { CKEditor } from "@/Theme/Midone/Forms/Ckeditor";
import { Repeat } from "@/Theme/Midone/Utils/Repeat";
import {Question} from "../Public/Question/Question";

export function Form({ laraPath,id, course ,nextPath=""}) {
        const { Lang } = useLang();
        const component = useFormRefs();
        const router = useRouter();
        let { save, get, getNeedles } = useData();
        let [needles, setNeedles] = useState();
        let formUrl = "/quiz";
        let url = laraPath+formUrl, method = "new";
        if (id != 0 && id != undefined) url = laraPath+formUrl + "/" + id, method = "edit";

        useEffect(() => {
                getNeedles(laraPath+formUrl + '/get-needles', setNeedles);
                if (id != 0 && id != undefined) get(url, component, "info");
        }, []);


        const saveItem = () => save(url, component, method, nextPath+"/courses/"+course+"/tools/quiz"+"?"+Math.random());
        const back = () => router.back();

        return <>
                <Box title={Lang(["public.quiz"])} shadow="false">
                        <Input type="hidden" value={course} refItem={[component, "course_id"]} />
                        <Input label="title" refItem={[component, "title"]} required="true" />
                        <SelectTail label="timezone" refItem={[component, "timezone_id"]} required="true" key={"timezone_id_"+needles?.timezone?.length} >
                                {(needles?.timezone)?.map((time, index)=>{
                                        return(
                                                <option key={index} value={time.id}>{time?.["title"]+" ("+time?.["offset"]+")"}</option>
                                        );
                                })}
                        </SelectTail>
                        <Input type="datetime-local" label="start" refItem={[component,"start_time_date"]} required="true" />
                        <Input type="datetime-local" label="end" refItem={[component,"end_time_date"]} required="true" />
                        <Input label="limit_time" refItem={[component, "limit_time"]} />
                        <CKEditor label="description" refItem={[component, "description"]} />
                        <CheckBox className="col-span-6" label="one_page" name={Lang('public.one_page')} refItem={[component, "one_page"]} />
                        <CheckBox className="col-span-6" label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                </Box>
                
                <Repeat count_data={component?.state?.info? component?.state?.info?.questions?.length : 1} child={Question} parent={component} needles={needles?.questiontype} />
                
                <ButtonContainer>
                        <Button label="back" onClick={back} />
                        <Button label="save" onClick={saveItem} />
                </ButtonContainer>
        </>;
}