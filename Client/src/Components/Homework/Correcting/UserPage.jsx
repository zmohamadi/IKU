"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useRouter } from 'next/navigation';
import { useData, useFormRefs, Input, Button, ButtonContainer, Box } from "@/Theme/Midone/Forms";
import { FeatherIcon, Tools } from "@/Theme/Midone";

export function UserPage({ laraPath,toolsId,attemp, lesson ,nextPath=""}) {
        const { Lang } = useLang();
        const component = useFormRefs();
        const router = useRouter();
        let { save, get } = useData();
        let formUrl = "/homeworks-answer/";
        let url = laraPath+formUrl, method = "edit";
        if (attemp != 0 && attemp != undefined) url = laraPath+formUrl+toolsId+"/" + attemp, method = "edit";

        useEffect(() => {
                if (attemp != 0 && attemp != undefined)  get(url, component, "info");
        }, []);


        const saveItem = () => save(url, component, method, nextPath+"/lessons/"+lesson+"/tools/homework/"+toolsId+"/correcting"+"?"+Math.random());
        const back = () => router.back();
        let attempInfo = component?.state?.info;
        let answers = attempInfo?.answers;

        return <>
            <Box title={attempInfo?.user?.name + attempInfo?.user?.lname}>
                <Input type="hidden" defaultValue={toolsId} refItem={[component, "homework_id"]} />
                
                {Tools.getArray(answers)
                .filter(answer => answer?.question?.question_type_id == 1)
                .map((answer, index) => {
                    return (
                    <>
                        <p className="col-span-12 font-bold font-medium">{index + 1}{") " + answer?.question?.title + " (score: " + answer?.question?.score + ")"}</p>
                        <p className="col-span-12 pl-5"> <span className="font-bold font-medium"> answer : </span>{answer?.answer ? answer?.answer : "no-reply"}</p>
                        <Input label="mark" defaultValue={answer?.score} refItem={[component, "mark_" + answer?.id]} required="true" />
                    </>
                    );
                })}

            </Box>
            <ButtonContainer>
                    <Button label="back" onClick={back} />
                    <Button label="Correcting" onClick={saveItem} />
            </ButtonContainer>
        </>;
}