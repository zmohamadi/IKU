"use client";
import { useLang } from "@/lib/lang";
import { Grid,Frame,FeatherIcon } from "@/Theme/Midone/Utils";
import {Form} from "./Form";

export function Page({laraPath, toolsId ,lesson , nextPath=""}){
    const {Lang} = useLang();
    let info = {
        activeSearch:false,
        url: laraPath+"/forum-posts/"+toolsId,
        columns: [
            {field: "text"},
            {label: "",
                sort:false, 
                width:"400px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon size="16" name="User" tooltip={Lang('public.user')} /><span className="ml-1 mr-1">{item.creator?.name} {item.creator?.lname}</span>
                        <FeatherIcon size="16" name="Eye" tooltip={Lang('public.count_view')} /> <span className="ml-1 mr-1">{item.count_view}</span>
                        <FeatherIcon size="16" name="Calendar" tooltip={Lang('public.created_at')} /> <span className="ml-1">{item.created_at}</span>
                    </div>
                </>
            },
           
        ],
    }

    return(
        <Frame title={Lang(["public.posts"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
            <div className="intro-y col-span-12">
                <Form lesson={lesson} toolsId={toolsId} nextPath={nextPath} laraPath={laraPath} />
            </div>
        </Frame>
    );
}