"use client";
import { useLang } from "@/lib/lang";
import { Box, Button, ButtonContainer } from "@/Theme/Midone/Forms";
import { Grid, Frame, useData, FeatherIcon } from "@/Theme/Midone/Utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Page({laraPath,nextPath,course,access}) {
    const router = useRouter();
    const back = ()=>router.back();
    const { Lang, local } = useLang();
    const { destroy } = useData();
    const formUrl =  nextPath+"/courses/"+course+"/tools/homework";
    let [params, setParams] = useState([]);
    let [url, setUrl] = useState(laraPath+"/homework-list/"+course);

    let info = {
        insertLink: access? formUrl+"/new": "",
        url: url,
        columns: [
            {label: "title", field: "title"},
            {label: "start_date", field: "start_date"},
            {label: "expire_date", field: "expire_date"},
            access?{ label: "author", jsx: (item) => <span>{item.creator?.name} {item.creator?.lname}</span> }:'',
            access?{ label: "created_at", jsx: (item) => <span>{item.created_at}</span>  }:'',
            access?{label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>}:'',
            {
                label: "",
                sort: false,
                width: "110px",
                jsx: (item) => <>
                    <div className='flex justify-center '>
                        <FeatherIcon name="CheckSquare" access={access} url={formUrl+"/"+item.id+"/correcting"} tooltip={Lang('public.correcting')} />
                        <FeatherIcon name="Edit" access={access} url={formUrl + "/" + item.id + "/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="Eye" url={formUrl + "/" + item.id} tooltip={Lang('public.view')} />
                        <FeatherIcon name="XOctagon" access={access} tooltip={Lang('public.delete')} color="darkred" onClick={() => destroy(laraPath+"/homework/" + item.id)} />
                    </div>
                </>
            },
        ],
    }
    useEffect(() => {
        let items = params.join(",");
        setUrl(laraPath+"/homework-list/"+course+"?type="+items);
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
    return (
        <Frame title={Lang(["public.homework"])}>
            <Box shadow={false}>
                <Button label={getLabel("corrected", "corrected")} onClick={()=>filterList("corrected")} className={setClass('corrected', 'btn-success')} />
                <Button label={getLabel("uncorrected", "uncorrected")} onClick={()=>filterList("uncorrected")} className={setClass('uncorrected', 'btn-warning')} />
            </Box>
            <div className="intro-y col-span-12">
                <Grid {...info} key={url} />
                <ButtonContainer>
                    <Link className="btn btn-primary w-20 mr-1 ml-1" href={nextPath+"/courses/"+course+"/tools"}>{Lang(["public.tools_link"])}</Link>
                    <Button label="back" onClick={back} />
                </ButtonContainer>
            </div>
        </Frame>
    );
}