"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid, Frame,useData} from "@/Theme/Midone/Utils";
import { FeatherIcon} from "@/Theme/Midone/Utils/FeatherIcon";

export default function List(){
    const {local,Lang} = useLang();
    const {mediaPath, laraAdmin ,nextAdmin } = useConfig();
    const formUrl = "/managers"; 
    const {destroy} = useData();
    let info = {
        insertLink: nextAdmin+formUrl+"/new",
        url: laraAdmin+"/session-managers",
        columns: [
            {label: "pic", jsx:(item)=><img className="rounded-full" src={mediaPath+"/users/"+item.pic} width={70} height={70} alt="Picture of the author" />},
            {label: "name", field: "name"},
            {label: "family", field: "lname"},
            {label: "mobile",  field:"mobile"},
            {label: "email",  field:"email"},
            {label: "is_event_speaker",  jsx: (item)=><span>{item.is_event_speaker?<FeatherIcon name="Check" color="green" />:"-"}</span>},
            {label: "is_mentor",  jsx: (item)=><span>{item.is_mentor?<FeatherIcon name="Check" color="green" />:"-"}</span>},
            // {label: "lang",  field:"lang"},
            {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},
            // {label: "created_at", field: "created_at"},
            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={nextAdmin+formUrl+"/"+item.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="Eye" url={nextAdmin+formUrl+"/"+item.id} tooltip={Lang('public.view')} />
                        <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+"/session-managers/"+item.id)} />
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.session_managers"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}
