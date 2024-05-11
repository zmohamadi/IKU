"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { FeatherIcon, Tools, useData,useFormRefs } from "@/Theme/Midone/Utils";
import { Box, Button, ButtonContainer } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
import { Show } from "../Public/Question/Show";

export function View({laraPath,id,access}){
    const router = useRouter();
    const back = ()=>router.back();
    const {Lang,local} = useLang();
    let component = useFormRefs();
    let {get} = useData();
    let formUrl = "/quiz";
    let url = laraPath+formUrl+"/"+id;
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;
    // console.log(data?.answer);
    return(<>
            <Box>
                <div class="col-span-12">
                    <div class="grid grid-cols-12">
                        <div class="col-span-4">
                            <span className="font-bold">{Lang(["public.date"])} :</span>  {data?.start_time_date} / {data?.end_time_date}
                        </div>
                        <div class="col-span-4">
                            <span className="font-bold">{Lang(["public.question_count"])} :</span>  {data?.question_count}
                        </div>
                        <div class="col-span-4">
                            <span className="font-bold">{Lang(["public.response_count"])} :</span>  {data?.response_count}
                        </div>
                        <div class="col-span-4">
                            <span className="font-bold">{Lang(["public.total_score"])} :</span>  {data?.total_score}
                        </div>
                        <div class="col-span-4">
                            <span className="font-bold">{Lang(["public.limit_time"])} :</span>  {data?.limit_time}
                        </div>
                        <div class="col-span-4">
                            <span className="font-bold">{Lang(["public.created_at"])} :</span>  {data?.created_at}
                        </div>
                        <div class="col-span-4">
                            <span className="font-bold">{Lang(["public.one_page"])} :</span>  {data?.one_page}
                        </div>
                        <div class="col-span-4">
                            <span className="font-bold">{Lang(["public.creator"])} :</span>  {data.creator?.name} {data.creator?.lname}
                        </div>
                        {access?<div class="col-span-4">
                            <span className="font-bold">{Lang(["public.status"])} :</span>  {data?.active_status?.["title_"+local]}
                        </div>:''}
                        <div class="col-span-12">
                            <span className="font-bold">{Lang(["public.description"])} :</span>  <div  dangerouslySetInnerHTML={{ __html: data.description }}></div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12">
                    <Show data={data} />
                </div>
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}