"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { FeatherIcon, Tools, useData,useFormRefs } from "@/Theme/Midone/Utils";
import { Box, Button, ButtonContainer, Input, Radio, Textarea } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';

export function View({laraPath,lesson,id,nextPath="",access}){
    const router = useRouter();
    const back = ()=>router.back()
    const {Lang,local} = useLang();
    let component = useFormRefs();
    let {get,save} = useData();
    let url = laraPath+"/survey/"+id;
    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = () => save(laraPath+"/survey/reply/"+id, component, "edit", nextPath+"/lessons/"+lesson+"/tools/survey"+"?"+Math.random());


    let data = component?.state?.info;
    return(<>
            <Box cols="grid-cols-1" title={data.title} >
            <div className="col-span-12">
                    <div className="grid grid-cols-12">
                        <div className="col-span-4">
                            <span className="font-bold">{Lang(["public.date"])} :</span>  {data?.start_date} / {data?.expire_date}
                        </div>
                        
                        {access?<>
                            <div className="col-span-4">
                                <span className="font-bold">{Lang(["public.created_at"])} :</span>  {data?.created_at}
                            </div>
                            <div className="col-span-4">
                                <span className="font-bold">{Lang(["public.status"])} :</span>  {data?.active_status?.["title_"+local]}
                            </div>
                        </>:''}
                        <div className="col-span-12">
                            <span className="font-bold">{Lang(["public.description"])} :</span>  <div  dangerouslySetInnerHTML={{ __html: data.description }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">

          
                    <Input type="hidden" value={lesson} refItem={[component, "lesson_id"]} />


                    {data?.answer?.length>0? Tools.getArray(data?.questions).map((question,qindex)=>{
                        return<> <li className="font-bold font-medium">{qindex+1 +") "+ question?.title}
                        </li>
                        {question?.question_type_id==2 ?<>
                            <ul className="">
                            {Tools.getArray(question?.question_options).map((options,index)=>{
                                    return <li>
                                    { index+1 +")"+ options?.title}{ data?.answer[qindex]?.question_option_id==options?.id?
                                        <FeatherIcon spanWrapperClass="display-inline pl-1" size="16" name="CheckCircle" color="green"  />
                                        :""}
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
                </div>
            
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