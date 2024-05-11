"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useRouter } from 'next/navigation';
import { useData, useFormRefs, Input, Button, ButtonContainer, Box } from "@/Theme/Midone/Forms";
import { FeatherIcon, Tools } from "@/Theme/Midone";

export function UserPage({ laraPath,toolsId,attemp, course ,nextPath=""}) {
        const { Lang } = useLang();
        const component = useFormRefs();
        const router = useRouter();
        let { save, get } = useData();
        let formUrl = "/quiz-attemp/";
        let url = laraPath+formUrl, method = "new";
        if (attemp != 0 && attemp != undefined) url = laraPath+formUrl + attemp, method = "edit";

        useEffect(() => {
                if (attemp != 0 && attemp != undefined)  get(url, component, "info");
        }, []);


        const saveItem = () => save(url, component, method, nextPath+"/courses/"+course+"/tools/quiz/"+toolsId+"/correcting"+"?"+Math.random());
        const back = () => router.back();
        let attempInfo = component?.state?.info;
        let answers = attempInfo?.answers;

        return <>
            <Box title={attempInfo?.user?.name + attempInfo?.user?.lname}>
                <Input type="hidden" defaultValue={toolsId} refItem={[component, "quiz_id"]} />
                
                {Tools.getArray( answers).map((answer,index)=>{
                    return <> {answer?.question?.question_type_id==1 ? <>
                            <p className="col-span-12 font-bold font-medium">{index+1}{") "+answer?.question?.title+" (score: "+answer?.question?.score+")"}</p>
                            <p className="col-span-12 pl-5"> <span className="font-bold font-medium"> answer : </span>{answer?.answer ? answer?.answer : "no-reply" }</p>
                            <Input label="mark" refItem={[component, "mark_"+answer?.id]} required="true" />
                        </>
                        : <> 
                            <p className="col-span-12 font-bold font-medium">{index+1}{") "+answer?.question?.title+" (score: "+answer?.question?.score+")"}</p>
                            
                            {Tools.getArray( answer?.question?.question_options).map((option,index1)=>{
                                return <>
                                        <Input type="hidden" defaultValue={answer?.answer_option_id == answer?.question?.correct_option_id ?answer?.question?.score : 0} refItem={[component, "mark_"+answer?.id]} required="true" />

                                        <p className={option?.id==answer?.question?.correct_option_id?"col-span-6 pl-5 bg-green-200":"col-span-12 pl-5"}> {index1+1}) {option?.title}
                                        { answer?.answer_option_id==option?.id?
                                        <FeatherIcon spanWrapperClass="display-inline pl-1" size="16" name="CheckCircle" 
                                        color={answer?.answer_option_id == answer?.question?.correct_option_id? "green" : "red"}  />
                                        :""}
                                        </p>
                                </> 

                            })}
                            {/* <Input label="mark" refItem={[component, "mark_"+answer?.id]} required="true" /> */}
                        </>
                        }
                    </>
                })}
            </Box>
            <ButtonContainer>
                    <Button label="back" onClick={back} />
                    <Button label="Correcting" onClick={saveItem} />
            </ButtonContainer>
        </>;
}