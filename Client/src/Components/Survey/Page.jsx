"use client";
import { useLang } from "@/lib/lang";
import { Button, ButtonContainer } from "@/Theme/Midone/Forms";
import { Grid, Frame, useData, FeatherIcon } from "@/Theme/Midone/Utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Page({laraPath,nextPath,course,access}) {
    const router = useRouter();
    const back = ()=>router.back();
    const { Lang, local } = useLang();
    const { destroy } = useData();
    const formUrl =  nextPath+"/courses/"+course+"/tools/survey";

    let info = {
        insertLink: access? formUrl+"/new": "",
        url: laraPath+"/survey-list/"+course,
        columns: [
            { label: "title", field: "title" },
            access?{ label: "start_date", jsx: (item) => <span>{item.start_date}</span> }:'',
            access?{ label: "expire_date", jsx: (item) => <span>{item.expire_date}</span> }:'',
            access?{ label: "author", jsx: (item) => <span>{item.creator?.name} {item.creator?.lname}</span> }:'',
            access?{ label: "created_at", jsx: (item) => <span>{item.created_at}</span>  }:'',
            access?{label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>}:'',
            {
                label: "",
                sort: false,
                width: "110px",
                jsx: (item) => <>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" access={access} url={formUrl + "/" + item.id + "/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="Eye" url={formUrl + "/" + item.id} tooltip={Lang('public.view')} />
                        <FeatherIcon name="MessageCircle" url={formUrl + "/" + item.id + "/reply"} tooltip={Lang('public.reply')} />
                        <FeatherIcon name="XOctagon" access={access} tooltip={Lang('public.delete')} color="darkred" onClick={() => destroy(laraPath+"/survey/" + item.id)} />
                    </div>
                </>
            },
        ],
    }

    return (
        <Frame title={Lang(["public.survey"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
                <ButtonContainer>
                    <Link className="btn btn-primary w-20 mr-1 ml-1" href={nextPath+"/courses/"+course+"/tools"}>{Lang(["public.tools_link"])}</Link>
                    <Button label="back" onClick={back} />
                </ButtonContainer>
            </div>
        </Frame>
    );
}