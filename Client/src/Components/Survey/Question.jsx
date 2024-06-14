"use client";
import { useState } from "react";
import { useLang } from "@/lib";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { Input } from "@/Theme/Midone/Forms/Input";
import { Line } from "@/Theme/Midone/Forms/Line";

export function Question({ index, parent, needles }) {
    const { Lang, local } = useLang()
    const [answerType, setAnswerType] = useState();
    let info = parent?.state?.info;
    return <>
            <Input defaultValue={info?.questions?.[index]?.title}   
                    label={"Question "+(index+1)} refItem={[parent, "question_"+index]} required="true"/>

            <SelectTail label={"type"} 
                defaultValue={info?.questions?.[index]?.question_type_id}
                refItem={[parent, "questionTypes_" + index]} required="true"
                data={needles} titleKey={"title_" + local} key={"type_id"+needles?.length} onChange={(e) => setAnswerType(e.value)}  />

            {
                (answerType == 2 || info?.questions?.[index]?.question_type_id==2) ? <>
                    <Input defaultValue={info?.questions?.[index]?.question_options[0]?.title} label={"Option" + 1} refItem={[parent, "questionOption_" + index + '#' + 1]} required="true" />
                    <Input defaultValue={info?.questions?.[index]?.question_options[1]?.title} label={"Option" + 2} refItem={[parent, "questionOption_" + index + '#' + 2]} required="true" />
                    <Input defaultValue={info?.questions?.[index]?.question_options[2]?.title} label={"Option" + 3} refItem={[parent, "questionOption_" + index + '#' + 3]} />
                    <Input defaultValue={info?.questions?.[index]?.question_options[3]?.title} label={"Option" + 4} refItem={[parent, "questionOption_" + index + '#' + 4]}  />
                    
                </>
                :''
            }
            <Line/>

    </>
}