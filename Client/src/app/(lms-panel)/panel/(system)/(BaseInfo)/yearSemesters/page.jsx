"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,useData,FeatherIcon } from "@/Theme/Midone/Utils";

export default function List(){
    const { Lang,local } = useLang();
    const { laraAdmin ,nextAdmin } = useConfig();
    const { destroy } = useData();
    const formUrl = "/yearSemesters"; 

    let info = {
        insertLink: nextAdmin+formUrl+"/new",
        url: laraAdmin+formUrl,
        columns: [
            {label: "year", field: "year"},
            {label: "semester", field: "semester"},
            {label: "start_date", field: "start_date"},
            {label: "end_date", field: "end_date"},
            // {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},
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
        <Frame title={Lang(["public.year_semester"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}