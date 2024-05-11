"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { FeatherIcon, Tools, useData,useFormRefs } from "@/Theme/Midone/Utils";
import { Box, Button, ButtonContainer } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';

export function View({laraPath,id,access}){
    const router = useRouter();
    const back = ()=>router.back();

    const {Lang,local} = useLang();
    const title = "survey"; 
    let component = useFormRefs();
    let {get} = useData();
    let url = laraPath+"/survey/"+id;
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;
    //console.log(data);
    
    return(<>
            <Box cols="grid-cols-1" title={data.title} >
               
                <ul className=" mb-5">
                    <li>
                        <h4 className="font-bold">{Lang(["public.start_date"])} :</h4>  {data?.start_date}
                    </li>
                    <li>
                        <h4 className="font-bold">{Lang(["public.expire_date"])} :</h4>  {data?.expire_date}
                    </li>
                    <li>
                        <h4 className="font-bold">{Lang(["public.description"])} :</h4>
                        <div  dangerouslySetInnerHTML={{ __html: data.description }}></div>
                    </li>
                    {access?<li>
                        <h4 className="font-bold">{Lang(["public.status"])} :</h4>  {data?.active_status?.["title_"+local]}
                    </li>
                    :''}
                </ul>
                <ul className="pl-3">
                {Tools.getArray(data?.questions).map((question,qindex)=>{
                    return<> <li className="" >
                        <div  dangerouslySetInnerHTML={{ __html: qindex+1 +") "+ question?.title }}></div>
                        {data?.answer?.length>0 &&question?.question_type_id==1 ?<>
                            <div  dangerouslySetInnerHTML={{ __html: " <b>Your Answer :</b> "+ data?.answer[qindex]?.answer }}></div>
                        </> :""}
                        </li>
                        {question?.question_type_id==2 ?<>
                            <ul className="pl-5 mb-3">
                            {Tools.getArray(question?.question_options).map((options,index)=>{
                                    return <li>
                                        { index+1 } ) {options?.title} { data?.answer[qindex]?.question_option_id==options?.id?
                                        <FeatherIcon spanWrapperClass="display-inline pl-1" size="16" name="CheckCircle" color="green"  />
:""}
                                    </li>
                                })}
                        </ul></> :''}
                        </>
                    
                })}
                    </ul>
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}