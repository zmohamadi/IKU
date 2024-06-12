"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { Tools, useData,useFormRefs } from "@/Theme/Midone/Utils";
import { Box, Button, ButtonContainer, Input } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
import { Show } from "./Show";

export function View({laraPath,lesson,id,access,nextPath=""}){
    const router = useRouter();
    const back = ()=>router.back();

    const {Lang,local} = useLang();
    let component = useFormRefs();
    let {get,save} = useData();
    let url = laraPath+"/homeworks-for-attemps/"+id;
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;

    const saveItem = () => save(laraPath+"/homeworks/reply/"+id, component, "edit", nextPath+"/lessons/"+lesson+"/tools/homework"+"?"+Math.random());

    return(<>
            <Box cols="grid-cols-1" title={data.title} >
               
                <div className="col-span-12">
                    <div className="grid grid-cols-12">
                        <div className="col-span-4">
                            <span className="font-bold">{Lang(["public.date"])} :</span>  {data?.start_date} / {data?.expire_date}
                        </div>
                        
                        <div className="col-span-4">
                            <span className="font-bold">{Lang(["public.created_at"])} :</span>  {data?.created_at}
                        </div>
                        
                        <div className="col-span-4">
                            <span className="font-bold">{Lang(["public.creator"])} :</span>  {data.creator?.name} {data.creator?.lname}
                        </div>
                        {access?<div className="col-span-4">
                            <span className="font-bold">{Lang(["public.status"])} :</span>  {data?.active_status?.["title_"+local]}
                        </div>:''}
                        <div className="col-span-12">
                            <span className="font-bold">{Lang(["public.description"])} :</span>  <div  dangerouslySetInnerHTML={{ __html: data.description }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <Input type="hidden" value={lesson} refItem={[component, "lesson_id"]} />
                    {Tools.getArray(data?.questions).map((question,qindex)=>{

                        return <Show time={data?.time} question={question} component={component} qindex={qindex} />
                    })}
                </div>
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                {
                    data?.time==true ? <Button label="save" onClick={saveItem} /> : ''
                }
            </ButtonContainer>
        </>
    );
}