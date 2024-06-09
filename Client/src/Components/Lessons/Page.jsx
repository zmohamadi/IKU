"use client";
import { useConfig } from "@/lib/config";
import { useLang } from "@/lib/lang";
// import { Box, Button, ButtonContainer } from "@/Theme/Midone/Forms";
// import { Select } from "@/Theme/Midone/Forms/Select";
import { Grid, Frame,useData, Tools} from "@/Theme/Midone/Utils";
import { FeatherIcon} from "@/Theme/Midone/Utils/FeatherIcon";
import { useEffect, useRef, useState } from "react";

export function Page({laraPath, nextPath, access}){
    
    const {mediaPath } = useConfig();
    const {Lang, local} = useLang();
    const formUrl = "/lessons"; 
    const {destroy,getNeedles} = useData();
    let [needles, setNeedles] = useState();
    let [params, setParams] = useState({teacher:"",level:"",category:"",status:"",display_home:""});
    let [url, setUrl] = useState(laraPath+"/lessons");
    const effectRan = useRef(false);

    let info = {
        insertLink: access? nextPath+formUrl+"/new": "",
        url: url,
        columns: [
            {label: "", jsx:(item)=><img src={mediaPath+"/lessons/"+item.thumbnail} width={100} height={100} alt="thumbnail" />},
            {label: "title", field: "title"},
            {label: "lesson_code", field: "code"},
            {label: "system", field: "system.title"},
            {label: "category", field:"category.title_"+local},
            {label: "status", jsx: (item)=><span className={"text-"+item?.active_status?.color}>{item?.active_status?.["title_"+local]}</span>},

            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Settings" url={nextPath+formUrl+"/"+item.id+"/tools"} tooltip={Lang('public.tools')} />
                        <FeatherIcon name="BookOpen" url={nextPath+formUrl+"/"+item.id+"/present"} tooltip={Lang('public.present')} />
                        {/* <FeatherIcon name="Users" access={access} url={nextPath+formUrl+"/"+item.id+"/students"} tooltip={Lang('public.students')} /> */}
                        <FeatherIcon name="Edit" access={access} url={nextPath+formUrl+"/"+item.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="Eye" url={nextPath+formUrl+"/"+item.id} tooltip={Lang('public.view')} />
                        <FeatherIcon name="XOctagon" access={access} tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraPath+formUrl+"/"+item.id)} />
                    </div>
                </>
            },
        ],
    }

    // useEffect(() => {
    //     if (!effectRan.current) {
    //         getNeedles(laraPath+formUrl+'/get-needles', setNeedles);
    //     }
    //     return () => effectRan.current = true;
    // }, []);

    // useEffect(() => {
    //     let urlItems = [];
    //     if(typeof params == "object"){
    //         Object.keys(params).forEach(key => urlItems.push(key+"="+params[key]))
    //         setUrl(laraPath+"/lessons?"+urlItems.join("&"));
    //     }
    // }, [params]);

    // const filterList = (e, filter)=>{
    //     params[filter] = e.target.value;
    //     setParams({...params});
    // }
    // const clearFilter=()=>{
    //     setParams({})
    // }

    return(<>
            <Frame title={Lang(["public.lessons"])}>
            {/* <Box shadow={false} minIcon={true} min={true}>
                <Select defaultValue={params?.teacher} key={Math.random()} onChange={(e)=>filterList(e, "teacher")} className="col-span-4" label="teacher">
                    {Tools.getArray(needles?.teacher).map((teach, index)=>
                            <option key={index} value={teach.id}> {teach.name+" "+teach.lname} </option>
                    )}
                </Select>
                <Select defaultValue={params?.level} key={Math.random()} onChange={(e)=>filterList(e, "level")} className="col-span-4" label="level" data={needles?.lessonlevel} titleKey={"title_"+local} />
                <Select defaultValue={params?.category} key={Math.random()} onChange={(e)=>filterList(e, "category")} className="col-span-4" label="category" data={needles?.lessoncategory} titleKey={"title_"+local} />
                <Select defaultValue={params?.status} key={Math.random()} onChange={(e)=>filterList(e, "status")} className="col-span-4" label="status">
                    <option key={1} value={1}> active </option>
                    <option key={0} value={0}> inactive </option>
                </Select>
                <Select defaultValue={params?.display_home} key={Math.random()} onChange={(e)=>filterList(e, "display_home")} className="col-span-4" label="display_home">
                    <option key={1} value={1}> display home </option>
                    <option key={0} value={0}> not display home </option>
                </Select>
                <ButtonContainer>
                    <Button label="clear_filter" className="btn btn-secondary w-24 w-20 mr-1 ml-1" onClick={clearFilter} />
                </ButtonContainer>
            </Box> */}
                <div className="intro-y col-span-12">
                    <Grid {...info} key={url} />
                </div>
            </Frame>
        </>
    );
}