"use client";
import { useLang } from "@/lib/lang";
import { Button, ButtonContainer } from "@/Theme/Midone/Forms";
import { Grid, Frame,useData} from "@/Theme/Midone/Utils";
import { FeatherIcon} from "@/Theme/Midone/Utils/FeatherIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Page({laraPath, nextPath="", access ,course}){

    const router = useRouter();
    const back = ()=>router.back();
    const {Lang,local} = useLang();
    const {destroy} = useData();
    let formUrl = "/courses/"+course+"/tools/meeting";

    let info = {
        insertLink: access? nextPath+formUrl+"/new": "",
        url: laraPath+"/meeting-list/"+course,
        columns: [
            {label: "title", field: "title"},
            {label: "date", field: "date"},
            {label: "start_hour", field: "start_hour"},
            {label: "duration", field: "duration"},
            access?{label: "presence_count", field: "presence_count"} : '',
            access?{label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>}:'',
            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Archive" url={nextPath+formUrl+"/"+item.id+"/archives"} tooltip={Lang('public.archives')} />
                        <FeatherIcon name="Users" access={access} url={nextPath+formUrl+"/"+item.id+"/students"} tooltip={Lang('public.students')} />
                        <FeatherIcon name="Edit" access={access} url={nextPath+formUrl+"/"+item.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="Eye" url={nextPath+formUrl+"/"+item.id} tooltip={Lang('public.view')} />
                        <FeatherIcon name="XOctagon" access={access} tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraPath+"/meetings/"+item.id)} />
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.meetings"])}>
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