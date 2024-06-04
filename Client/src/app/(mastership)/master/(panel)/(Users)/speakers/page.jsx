"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,useData,FeatherIcon } from "@/Theme/Midone/Utils";

export default function List()
{
    const {Lang,local} = useLang();
    const {laraAdmin, nextAdmin, mediaPath } = useConfig();
    const {destroy} = useData();
    const formUrl = "/speakers"; 

    let info = {
        insertLink: nextAdmin+formUrl+"/new",
        url: laraAdmin+formUrl,
        columns: [
            {label: "pic", jsx:(item)=><img src={mediaPath+"/users/"+item.pic} width={70} height={70} className="rounded-full" alt={item.name} />},
            {label: "name", field: "name"},
            {label: "lname", field: "lname"},
            {label: "email", field: "email"},
            {label: "mobile", field: "mobile"},
            {label: "is_mentee",  jsx: (item)=><span>{item.is_mentee?<FeatherIcon name="Check" color="green" />:"-"}</span>},
            {label: "is_mentor",  jsx: (item)=><span>{item.is_mentor?<FeatherIcon name="Check" color="green" />:"-"}</span>},
            {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},
            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={nextAdmin+formUrl+"/"+item.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="Eye" url={nextAdmin+formUrl+"/"+item.id} tooltip={Lang('public.view')} />
                        <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+formUrl+"/"+item.id)} />
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.speakers"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}