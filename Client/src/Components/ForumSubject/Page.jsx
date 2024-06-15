"use client";
import { useLang } from "@/lib/lang";
import { Grid,Frame,FeatherIcon } from "@/Theme/Midone/Utils";
import {Form} from "./Form";

export function Page({laraPath, nextPath="" ,course}){
    const {Lang} = useLang();
    
    let formUrl = "/courses/"+course+"/tools/forum";
    let info = {
        activeSearch:false,
        url: laraPath+"/forum-subjects/"+course,
        columns: [
            {label: "title", field: "title"},
            {label: "last_post", jsx: (item)=><span>{item.posts[0]?.text}</span>},
            {label: "author", jsx: (item)=><span>{item.creator?.name} {item.creator?.lname}</span>},
            {label: "posts", field: "count_post"},
            {label: "created_at", field: "created_at"},
            {label: "",
                sort:false, 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="MessageCircle" url={nextPath+formUrl+"/"+item.id+"/posts"} tooltip={Lang('public.posts')} />
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.subjects"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
            <div className="intro-y col-span-12">
                <Form course={course} laraPath={laraPath} nextPath={nextPath} />
            </div>
        </Frame>
    );
}