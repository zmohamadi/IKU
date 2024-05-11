"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid, Frame,useData} from "@/Theme/Midone/Utils";
import { FeatherIcon} from "@/Theme/Midone/Utils/FeatherIcon";
import Form from "./(form)/form-list";
import { useState } from "react";

export default function List(){
    let [id, setId] = useState(0);
    const {Lang,local} = useLang();
    const {laraAdmin ,nextAdmin } = useConfig();
    const formUrl = "/course-levels" ; 
    const {destroy} = useData();
    let info = {
        url: laraAdmin+"/course-levels",
        columns: [
            {label: "title", field: "title_"+local},
            
            {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},
            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" tooltip={Lang('public.edit')} onClick={()=>setId(item.id)}/>
                        <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+formUrl+"/"+item.id)} />
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.course-levels"])}>
            <div className="intro-y col-span-8">
                <Grid {...info} key={"table key"} />
            </div>
            <div className="intro-y col-span-4">
                <Form id={id}/>
            </div>
        </Frame>
    );
}