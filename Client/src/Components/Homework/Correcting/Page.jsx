"use client";
import { useLang } from "@/lib/lang";
import { Grid,Frame,FeatherIcon } from "@/Theme/Midone/Utils";
import { Button, ButtonContainer } from "@/Theme/Midone";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Page({laraPath,lesson,toolsId,nextPath=""}){
    const {Lang,local} = useLang();
    const router = useRouter();
    const back = ()=>router.back();
    let formUrl = nextPath+"/lessons/"+lesson+"/tools/homework/"+toolsId+"/correcting/";    
    let info = {
        // insertLink: nextAdmin+formUrl+"/new",
        url: laraPath+"/homework-answers/"+toolsId,
        columns: [
            {label: "name", field: "name"},
            {label: "lname", field: "lname"},
            {label: "email", field: "email"},
            {label: "score", jsx: (item)=><span>{item.homework_attemps?.[0]?.total_score ? item.homework_attemps?.[0]?.total_score+"/"+item.homework_attemps?.[0]?.homework_score:""}</span>},
            {label: "",
                sort:false, 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        {item?.homework_attemps?.[0]?.homework?.countQType1>0 ?  <FeatherIcon name="CheckSquare" url={formUrl+item.id+"/attemp"} tooltip={Lang('public.correcting')} /> : ""}
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.students"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
                <ButtonContainer>
                    <Link className="btn btn-primary w-20 mr-1 ml-1" href={nextPath+"/lessons/"+lesson+"/tools"}>{Lang(["public.tools_link"])}</Link>
                    <Button label="back" onClick={back} />
                </ButtonContainer>
            </div>
        </Frame>
    );
}