"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useRouter } from 'next/navigation';
import { useData, useFormRefs, Input, Textarea, Button, ButtonContainer, Box, CheckBox, DatePicker } from "@/Theme/Midone/Forms";
import { Repeat } from "@/Theme/Midone/Utils/Repeat";
import {Question} from "../Public/Question/Question";

export function Form({ laraPath,id, course ,nextPath=""}) {
        const { Lang } = useLang();
        const component = useFormRefs();
        const router = useRouter();
        let { save, get, getNeedles } = useData();
        let [needles, setNeedles] = useState();
        let formUrl = "/homeworks";
        let url = laraPath+formUrl, method = "new";
        if (id != 0 && id != undefined) url = laraPath+formUrl + "/" + id, method = "edit";

        useEffect(() => {
                getNeedles(laraPath+formUrl + '/get-needles', setNeedles);
                if (id != 0 && id != undefined) get(url, component, "info");
        }, []);


        const saveItem = () => save(url, component, method, nextPath+"/courses/"+course+"/tools/homework"+"?"+Math.random());
        const back = () => router.back();

        return <>
                <Box title={Lang(["public.homework"])}>
                        <Input label="title" refItem={[component, "title"]} required="true" />
                        <DatePicker  label="start_date" refItem={[component,"start_date"]} required="true" />
                        <DatePicker  label="expire_date" refItem={[component,"expire_date"]} required="true" />
                        <Input type="hidden" value={course} refItem={[component, "course_id"]} />
                        <Textarea className="col-span-6" refItem={[component, "description"]} />
                        <CheckBox className="col-span-6" label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                </Box>
                <Repeat count_data={component?.state?.info? component?.state?.info?.questions?.length : 1} child={Question} parent={component} needles={needles?.questiontype} />

                <ButtonContainer>
                        <Button label="back" onClick={back} />
                        <Button label="save" onClick={saveItem} />
                </ButtonContainer>
        </>;
}