"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,useData,FeatherIcon } from "@/Theme/Midone/Utils";

export function Page({laraPath,course,toolsId,nextPath=""}){

    const {Lang,local} = useLang();
    let formUrl = nextPath+"/courses/"+course+"/tools/homework/"+toolsId+"/correcting/";    
    let info = {
        // insertLink: nextAdmin+formUrl+"/new",
        url: laraPath+"/homework-answers/"+toolsId,
        columns: [
            {label: "name", field: "name"},
            {label: "lname", field: "lname"},
            {label: "email", field: "email"},
            {label: "",
                sort:false, 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="CheckSquare" url={formUrl+item.id+"/attemp"} tooltip={Lang('public.correcting')} />
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.students"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}