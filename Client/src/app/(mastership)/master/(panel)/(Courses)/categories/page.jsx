"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid, Frame,useData} from "@/Theme/Midone/Utils";
import { FeatherIcon} from "@/Theme/Midone/Utils/FeatherIcon";

export default function List(){

    const {Lang,local} = useLang();
    const {laraAdmin ,nextAdmin,mediaPath } = useConfig();
    const formUrl = "/course-categories" ; 
    const {destroy} = useData();
    let info = {
        insertLink:nextAdmin+formUrl+"/new",
        url: laraAdmin+"/course-categories",
        columns: [
            {label: "image", jsx:(item)=><img className="rounded-full" src={mediaPath+"/courseCategories/"+item.pic} width={70} height={70} alt="Picture" />},
            {label: "title", field: "title_"+local},            
            {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},
            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={nextAdmin+formUrl+"/"+item.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+formUrl+"/"+item.id)} />
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.course_categories"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}