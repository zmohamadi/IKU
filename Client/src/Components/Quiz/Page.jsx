"use client";
import { useLang } from "@/lib/lang";
import { Button, ButtonContainer } from "@/Theme/Midone/Forms";
import { Grid, Frame, useData, FeatherIcon } from "@/Theme/Midone/Utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Page({laraPath,nextPath,lesson,access}) {
    const router = useRouter();
    const back = ()=>router.back();
    const { Lang, local } = useLang();
    const { destroy } = useData();
    const formUrl =  nextPath+"/lessons/"+lesson+"/tools/quiz";

    let info = {
        insertLink: access? formUrl+"/new": "",
        url: laraPath+"/quiz-list/"+lesson,
        columns: [
            { label: "title", field: "title" },
            {label: "start", jsx: (item)=><span>{item?.start_time_date?.replace("T",",")}</span>},
            {label: "end", jsx: (item)=><span>{item?.end_time_date?.replace("T",",")}</span>},
            access?{ label: "corrected", jsx: (item) => <span>{item.corrected_count}</span> }:'',
            access?{ label: "response", jsx: (item) => <span>{item.response_count}</span> }:'',
            access?{ label: "total_score", jsx: (item) => <span>{item.total_score}</span> }:'',
            access?{ label: "min", jsx: (item) => <span>{item.min_score}</span> }:'',
            access?{ label: "avg", jsx: (item) => <span>{item.avg_score}</span> }:'',
            access?{ label: "max", jsx: (item) => <span>{item.max_score}</span> }:'',
            // access?{ label: "creator", jsx: (item) => <span>{item.creator?.name} {item.creator?.lname}</span> }:'',
            // access?{ label: "created_at", jsx: (item) => <span>{item.created_at}</span>  }:'',
            // access?{label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>}:'',
            {
                label: "",
                sort: false,
                width: "110px",
                jsx: (item) => <>
                    <div className='flex justify-center '>
                        <FeatherIcon name="MessageCircle" url={formUrl + "/" + item.id + "/reply"} tooltip={Lang('public.reply')} /> 
                        <FeatherIcon name="CheckSquare" access={access} url={formUrl+"/"+item.id+"/correcting"} tooltip={Lang('public.correcting')} />
                        <FeatherIcon name="Eye" url={formUrl + "/" + item.id} tooltip={Lang('public.view')} />
                        <FeatherIcon name="Edit" access={access} url={formUrl + "/" + item.id + "/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="XOctagon" access={access} tooltip={Lang('public.delete')} color="darkred" onClick={() => destroy(laraPath+"/quiz/" + item.id)} />
                    </div>
                </>
            },
        ],
    }

    return (
        <Frame title={Lang(["public.quiz"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
                <ButtonContainer>
                    <Link className="btn btn-primary w-20 mr-1 ml-1" href={nextPath+"/lessons/"+lesson+"/tools"}>{Lang(["public.tools_link"])}</Link>
                    <Button label="back" onClick={back} />
                </ButtonContainer>
            </div>
        </Frame>
    );
}