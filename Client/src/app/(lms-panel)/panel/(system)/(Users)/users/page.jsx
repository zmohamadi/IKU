"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Grid, Frame, FeatherIcon} from "@/Theme/Midone/Utils";

export default function List({link="/users", displayRole=true, view=false}){
    const {Lang, local} = useLang();
    const {mediaPath,laraAdmin,nextAdmin} = useConfig();
    const {destroy} = useData();
    const formUrl = nextAdmin+link;

    let info = {
        insertLink: formUrl+"/new",
        url: laraAdmin+link,
        columns: [
            {label: "pic", jsx:(item)=><img className="rounded-full" src={mediaPath+"/users/"+item?.photo} width={50} height={50} alt="user" />},
            {label: "gender", sort:false, field: "gender.title_"+local},
            {label: "name", field: "firstname"},
            {label: "lname", field: "lastname"},
            {label: "mobile", field: "mobile"},
            {label: "email", field: "email"},
            (displayRole)? {label: "role", sort:false, field: "role.title_"+local} : "",
            {label: "status", jsx: (item)=><span className={"text-"+item?.active_status?.color}>{item?.active_status?.["title_"+local]}</span>},
            {label: "", sort:false, 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={formUrl+"/"+item?.id+"/edit"} tooltip={Lang('public.edit')} />
                        {(view)? <FeatherIcon name="Eye" url={formUrl+"/"+item?.id} tooltip={Lang('public.view')} />:""}
                        <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+link+"/"+item?.id)} />
                    </div>
                </>
            }, 
        ],
    }

    return(
        <>
            <Frame title={Lang(["public.users"])}>
                <div className="intro-y col-span-12">
                    <Grid {...info} />
                </div>
            </Frame>
        </>
    );
}