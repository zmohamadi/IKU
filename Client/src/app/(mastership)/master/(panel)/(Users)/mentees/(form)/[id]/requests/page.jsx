
"use client"
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { Grid } from "@/Theme/Midone/Utils";
import { Button } from "@/Theme/Midone/Forms";

const List = ({params}) => {
    const id = params.id;
    const {Lang,local} = useLang();
    const {laraAdmin,mediaPath} = useConfig();
    const router = useRouter();
    const formUrl = "/mentees/requests";
    const back = ()=>router.back(); 

    let info = {
        url: laraAdmin+formUrl+"?id="+id,
        columns: [
            {label: "pic", jsx:(item)=><img src={mediaPath+"/users/"+item?.mentor?.pic} width={100} height={100} alt="Picture of the author" />},
            {label:"mentor", jsx:(item)=><span>{(item?.mentor)? item?.mentor?.name+" "+((item?.mentor?.lname)?item?.mentor?.lname:"")
                : '------------'}</span>}, 
            {label:"email", jsx:(item)=><span>{item?.mentor?.email}</span>},
                // {label:"category", jsx:(item)=><span>{item?.mentor?.mentorship_topic?.["title_"+local]}</span>},
            {label:"calendar", jsx:(item)=><span>{item?.calendar?.date+" "+item?.calendar?.from_hour+" "+item?.calendar?.to_hour}</span>},
            {label:"holding", jsx: (item)=><span>{(item?.calendar?.online_link)?
                <a href={item?.calendar?.online_link} target="blank" className="text-theme-17 block">{item?.calendar?.online_link}</a>
            :   <span className="text-theme-23 block text-center">{Lang("public.offline")}</span> }</span>},
            {label: "status",  jsx: (item)=><span className={item.confirm_status?.color}>{item.confirm_status?.["title_"+local]}</span>},
        ],
    }

    return(
        <div className="col-span-12 xl:col-span-12 mt-6">
            <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-medium truncate ml-5"> {Lang("public.calendar")+" "+Lang("public.mentorship")} </h2>
            </div>
            <div class="mt-5">
                <Grid {...info} activeSearch={false} key={"table key"} />
                <Button className="btn btn-primary w-20 m-2 float-right" label="back" onClick={back} />
            </div>
        </div>
    );
}

export default List;