"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,useData,FeatherIcon } from "@/Theme/Midone/Utils";

export default function List(){
    const {local,Lang} = useLang();
    const {mediaPath, laraAdmin ,nextAdmin } = useConfig();
    const formUrl = "/blogs"; 
    const {destroy} = useData();
    let info = {
        insertLink: nextAdmin+formUrl+"/new",
        url: laraAdmin+formUrl,
        columns: [
            {label: "pic", jsx:(item)=><img src={mediaPath+"/blogs/"+item.thumb} width={100} height={100} alt="Picture of the author" />},
            {label: "title", field: "title"},
            {label: "subject",  field:"subject.title_"+local},
            {label: "author", jsx: (item)=><span>{item.creator_admin?.name}</span>},
            {label: "editor", jsx: (item)=><span>{item.editor_admin?.name}</span>},
            {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},
            {label: "view", field: "count_view"},
            {label: "created_at", field: "created_at"},
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
        <Frame title={Lang(["public.blogs"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}