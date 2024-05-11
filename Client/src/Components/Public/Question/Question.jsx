"use client";
import { useState } from "react";
import { useLang } from "@/lib";
import { SelectTail , Input ,Textarea , Radio , Box } from "@/Theme/Midone/Forms";

export function Question({ index, parent, needles }) {
    const { Lang, local } = useLang()
    const [answerType, setAnswerType] = useState();
    let info = parent?.state?.info;
    let i = index+1;
    let options= [];
    for(let i=1; i<=4; i++)
    {
        options.push({num:i});
    }
    
    return <>
    <Box shadow={false}>
            <Textarea className="col-span-6" label={Lang("public.question")+" "+i} required="true"
                refItem={[parent, "question_"+index]} defaultValue={info?.questions?.[index]?.title}
            />
            <div className="col-span-6">
                <div className="grid p-1 gap-4 grid-cols-1">
                    <Input label={Lang("public.score")} required="true" 
                        refItem={[parent, "score_"+index]} defaultValue={info?.questions?.[index]?.score}
                    />
                    <Input label={Lang("public.order")} required="true"
                        refItem={[parent, "order_"+index]} defaultValue={info?.questions?.[index]?.order}
                    />
                    <SelectTail className="col-span-12" label={Lang("public.type")} required="true"
                        refItem={[parent, "qTypes_"+index]} defaultValue={info?.questions?.[index]?.question_type_id}
                        data={needles} titleKey={"title_" + local} key={"type_id"+needles?.length} onChange={(e) => setAnswerType(e.value)}
                    />
                </div>

            </div>
            {
                (answerType == 2 || info?.questions?.[index]?.question_type_id==2) ? <>
                    <Input label="Option 1" refItem={[parent, "qOption_" + index + '#' + 1]} defaultValue={info?.questions?.[index]?.question_options[0]?.title}
                    />
                    <Input label="Option 2" refItem={[parent, "qOption_" + index + '#' + 2]} defaultValue={info?.questions?.[index]?.question_options[1]?.title}
                    />
                    <Input label="Option 3" refItem={[parent, "qOption_" + index + '#' + 3]} defaultValue={info?.questions?.[index]?.question_options[2]?.title}
                    />
                    <Input label="Option 4" refItem={[parent, "qOption_" + index + '#' + 4]} defaultValue={info?.questions?.[index]?.question_options[3]?.title}
                    />
                    <Radio type="col" value="1" label="answer" data={[{id:1, name:"Option1"}, {id:2, name:"Option2"},{id:3, name:"Option3"},{id:4, name:"Option4"}]} titleKey="name" refItem={[parent, "correctOption_"+index]} />
                </>
                :''
            }
    </Box>
    </>
}