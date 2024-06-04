"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,useData,FeatherIcon } from "@/Theme/Midone/Utils";

export default function List()
{
    const {Lang,local} = useLang();
    const {laraAdmin, nextAdmin, mediaPath } = useConfig();
    const {destroy} = useData();
    const formUrl = "/mentors"; 

    let info = {
        insertLink: nextAdmin+formUrl+"/new",
        url: laraAdmin+formUrl,
        columns: [
            {label: "pic", jsx:(item)=><img src={mediaPath+"/users/"+item.pic} width={100} height={100} alt="Picture of the author" />},
            {label: "name", field: "name"},
            {label: "lname", field: "lname"},
            {label: "email", field: "email"},
            {label: "topic", field: "mentorship_topic.title_"+local},
            {label: "is_event_speaker",  jsx: (item)=><span>{item.is_event_speaker?<FeatherIcon name="Check" color="green" />:"-"}</span>},
            {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},
            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Calendar" url={nextAdmin+formUrl+"/"+item.id+"/calendars"} tooltip={Lang('public.calendars')} />
                        <FeatherIcon name="List" url={nextAdmin+formUrl+"/"+item.id+"/requests"} tooltip={Lang('public.requests')} />
                        <FeatherIcon name="Star" url={nextAdmin+formUrl+"/"+item.id+"/evaluates"} tooltip={Lang('public.evaluates')} />
                        <FeatherIcon name="Edit" url={nextAdmin+formUrl+"/"+item.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+formUrl+"/"+item.id)} />
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.mentors"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}