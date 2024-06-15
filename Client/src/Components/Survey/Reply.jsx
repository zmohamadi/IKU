"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { Tools, useData,useFormRefs } from "@/Theme/Midone/Utils";
import { Box, Button, ButtonContainer, Input, Radio, Textarea } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';

export function Reply({laraPath,course,id,nextPath=""}){
    const router = useRouter();
    const back = ()=>router.back();

    const {Lang} = useLang();
    const title = "survey"; 
    let component = useFormRefs();
    let {get,save} = useData();
    let url = laraPath+"/survey/"+id;
    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = () => save(laraPath+"/survey/reply/"+id, component, "edit", nextPath+"/courses/"+course+"/tools/survey"+"?"+Math.random());


    let data = component?.state?.info;
    return(<>
            <Box cols="grid-cols-1" title={data.title} >
            
            <ul className="mb-5">
                <li>
                    <h4 className="font-bold">{Lang(["public.start_date"])} :</h4>  {data?.start_date}
                </li>
                <li>
                    <h4 className="font-bold">{Lang(["public.expire_date"])} :</h4>  {data?.expire_date}
                </li>
                <li>
                    <h4 className="font-bold">{Lang(["public.description"])} :</h4>  {data?.description}
                </li>
            </ul>
            <Input type="hidden" value={course} refItem={[component, "course_id"]} />


            {data?.answer?.length>0? Tools.getArray(data?.questions).map((question,qindex)=>{
                return<> <li className="font-bold font-medium">{qindex+1 +") "+ question?.title}
                </li>
                {question?.question_type_id==2 ?<>
                    <ul className="">
                    {Tools.getArray(question?.question_options).map((options,index)=>{
                            return <li>
                                { index+1 } ) {options?.title}
                            </li>
                        })}
                </ul></> :''}
                </>
            }) :Tools.getArray(data?.questions).map((question,qindex)=>{
                return <ul className="">
                    {question?.question_type_id==2 ?<>
                        <li>
                        <Radio label={ [(parseInt(qindex)+1)+") "+question?.title]} data={question?.question_options} refItem={[component, "response_"+question?.id]} />
                        
                    </li></> :<>
                        <p className="font-bold font-medium">{qindex+1 +") "+ question?.title}</p> 
                        <li><Textarea label="Your Answer" className="col-span-6" refItem={[component, "response_"+question?.id]} /></li>
                    </>
                    }
                </ul>
            })
            }
                
            
        </Box>
        <ButtonContainer>
            <Button label="back" onClick={back} />
            {
                data?.answer?.length==0 ? <Button label="save" onClick={saveItem} /> : ''
            }
        </ButtonContainer>
    </>
);
}