
"use client"
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { Grid } from "@/Theme/Midone/Utils";
import { Button } from "@/Theme/Midone/Forms";

const List = ({params}) => {
    const id = params.id;
    const {Lang,local} = useLang();
    const {laraAdmin} = useConfig();
    const router = useRouter();
    const formUrl = "/mentors/calendars"; 
    const back = ()=>router.back();

    let info = {
        url: laraAdmin+formUrl+"?id="+id,
        columns: [
            {label: "date", field: "date"},
            {label: "from_hour", field: "from_hour"},
            {label: "to_hour", field: "to_hour"},
            {label:"holding", jsx: (item)=><span>{(item?.online_link)?
                <a href={item?.online_link} target="blank" className="text-theme-17 block">{item?.online_link}</a>
            :   <span className="text-theme-23 block text-center">{Lang("public.offline")}</span> }</span>},
            {label:"mentee_accepted", jsx:(item)=><span>{(item?.mentee)? item?.mentee?.name+" "+((item?.mentee?.lname)?item?.mentee?.lname:"")
                : '------------'}</span>},
            {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},
        ],
    }
    return(
        <div class="col-span-12 xl:col-span-12 mt-6">
            <div class="intro-y flex items-center h-10">
                <h2 class="text-lg font-medium truncate ml-5"> {Lang("public.calendar")+" "+Lang("public.mentorship")} </h2>
            </div>
            <div class="mt-5">
                <Grid {...info} activeSearch={false} key={"table key"} />
                <Button className="btn btn-primary w-20 m-2 float-right" label="back" onClick={back} />
            </div>
        </div>
    );
}

export default List;