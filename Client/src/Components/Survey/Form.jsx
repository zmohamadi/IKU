"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useRouter } from 'next/navigation';
import { useData, useFormRefs, Input, Button, ButtonContainer, Textarea, Box, CheckBox, DatePicker } from "@/Theme/Midone/Forms";
import { Repeat } from "@/Theme/Midone/Utils/Repeat";
import {Question} from "./Question";

export function Form({ laraPath,id, course ,nextPath=""}) {
        const { Lang } = useLang();
        const component = useFormRefs();
        const router = useRouter();
        let { save, get, getNeedles } = useData();
        let [needles, setNeedles] = useState();
        const formUrl = laraPath+"/survey";
        let url = formUrl, method = "new";
        if (id != 0 && id != undefined) url = formUrl + "/" + id, method = "edit";

        useEffect(() => {
                getNeedles(formUrl + '/get-needles', setNeedles);
                if (id != 0 && id != undefined) get(url, component, "info");
        }, []);


        const saveItem = () => save(url, component, method, nextPath+"/courses/"+course+"/tools/survey"+"?"+Math.random());
        const back = () => router.back();

        // console.log(component);

        return <>
                <Box title={Lang(["public.survey"])}>
                        <Input label="title" refItem={[component, "title"]} required="true" />
                        <DatePicker  label="start_date" refItem={[component,"start_date"]} required="true" />
                        <DatePicker  label="expire_date" refItem={[component,"expire_date"]} required="true" />
                        <Input type="hidden" value={course} refItem={[component, "course_id"]} />
                        <Textarea className="col-span-6" refItem={[component, "description"]} />
                        <CheckBox className="col-span-6" label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                </Box>
                <Box shadow={false}>
                        <Repeat count_data={component?.state?.info?.questions?.length} child={Question} parent={component} needles={needles?.questiontype} />
                </Box>
                <ButtonContainer>
                        <Button label="back" onClick={back} />
                        <Button label="save" onClick={saveItem} />
                </ButtonContainer>
        </>;
}