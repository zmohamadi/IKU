"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { useRouter } from "next/navigation";
import { Grid, Frame, FeatherIcon} from "@/Theme/Midone/Utils";
import { Box, Button, ButtonContainer } from "@/Theme/Midone/Forms";

export default function List({role}){
    const {Lang, local} = useLang();
    const {mediaPath,laraAdmin,nextAdmin} = useConfig();
    const formUrl = nextAdmin+"/users";
    const laraUrl = laraAdmin+"/users";
    const {destroy} = useData();
    const router = useRouter();
    const back = ()=>router.back();

    let [params, setParams] = useState([]);
    let [url, setUrl] = useState(laraAdmin+"/users");

    let info = {
        insertLink: formUrl+"/new",
        // url: url,
        url: laraUrl+"?params="+role,
        columns: [
            {label: "pic", jsx:(item)=><img className="rounded-full" src={mediaPath+"/users/"+item?.photo} width={50} height={50} alt="user" />},
            {label: "gender", field: "gender.title_"+local},
            {label: "name", field: "firstname"},
            {label: "lname", field: "lastname"},
            {label: "mobile", field: "mobile"},
            {label: "email", field: "email"},
            {label: "role", field: "role.title_"+local},
            {label: "status", jsx: (item)=><span className={"theme-"+item?.active_status?.color}>{item?.active_status?.["title_"+local]}</span>},
            {label: "",
                sort:false, 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={formUrl+"/"+item?.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="Eye" url={formUrl+"/"+item?.id} tooltip={Lang('public.view')} />
                        <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraUrl+"/"+item?.id)} />
                    </div>
                </>
            },
            
        ],
    }
    useEffect(() => {
        let items = params.join(",");
        setUrl(laraAdmin+"/users?type="+items);
    }, [params]);

    const filterList = (filter)=>{
        let key = params.indexOf(filter);
        if(key == -1){
            params.push(filter);
        }else{
            params.splice(key, 1);
        }
        setParams([...params]);
    }

    const setClass = (item, btnClass) => {
        return "col-span-2 btn "+ btnClass+ (params.indexOf(item) == -1? " btn-secondary-soft": "")
    }

    const getLabel = (label, item) => {
        return <>
                    { (params.indexOf(item) == -1) ? 
                        <FeatherIcon name="Square" spanWrapperClass="mx-2" />
                        : <FeatherIcon name="Check" spanWrapperClass="mx-2" />
                    }
                    {Lang('public.'+label)}
                </>
    }

    return(<>
            <Frame title={Lang(["public.users"])}>
                {/* <Box shadow={false}>
                    <Button label={getLabel("teachers", "is_teacher")} onClick={()=>filterList("is_teacher")} className={setClass('is_teacher', 'btn-dark')} />
                    <Button label={getLabel("students", "is_student")} onClick={()=>filterList("is_student")} className={setClass('is_student', "btn-linkedin")} />
                    <Button label={getLabel("managers", "is_manager")} onClick={()=>filterList("is_manager")} className={setClass('is_manager', 'btn-warning')} />
                    <Button label={getLabel("mentors", "is_mentor")} onClick={()=>filterList("is_mentor")} className={setClass('is_mentor', 'btn-primary')} />
                    <Button label={getLabel("mentees", "is_mentee")} onClick={()=>filterList("is_mentee")} className={setClass('is_mentee', 'btn-success')} />
                    <Button label={getLabel("speakers", "is_event_speaker")} onClick={()=>filterList("is_event_speaker")} className={setClass('is_event_speaker', 'btn-twitter')} />
                </Box> */}
                <div className="intro-y col-span-12">
                    <Grid {...info} key={url} />
                    {/* <ButtonContainer>
                        <Button label="back" onClick={back} />
                    </ButtonContainer> */}
                </div>
            </Frame>
    </>
    );
}