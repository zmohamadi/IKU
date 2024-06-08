"use client";
import { useConfig } from "@/lib/config";
import { useLang } from "@/lib/lang";
import { Box, Button, ButtonContainer } from "@/Theme/Midone/Forms";
import { Select } from "@/Theme/Midone/Forms/Select";
import { Grid, Frame,useData, Tools} from "@/Theme/Midone/Utils";
import { FeatherIcon} from "@/Theme/Midone/Utils/FeatherIcon";
import { useEffect, useRef, useState } from "react";

export default function Page(){
    
    const {mediaPath, laraAdmin, nextAdmin} = useConfig();
    const {Lang, local} = useLang();
    const formUrl = "/classes"; 
    const {destroy,getNeedles} = useData();
    let [needles, setNeedles] = useState();
    let [params, setParams] = useState({year:"1403"
    ,semester:"2"
});
    let [url, setUrl] = useState(laraAdmin+"/classes");
    const effectRan = useRef(false);
    let access=true;

    let info = {
        insertLink: access? nextAdmin+formUrl+"/new": "",
        url: url,
        columns: [
            {label: "title", field: "lesson.title"},
            {label: "lesson_code", field: "lesson.code"},
            {label: "year", field: "year"},
            {label: "semester", field: "semester"},
            {label: "teacher", jsx: (item)=><span>{item?.teacher?.firstname} {item?.teacher?.lastname}</span>},
            {label: "system", field: "lesson.system.title"},
            {label: "category", jsx: (item)=><span>{item?.lesson?.category?.["title_"+local]} </span>},
            // {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},

            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        {/* <FeatherIcon name="Settings" url={nextAdmin+formUrl+"/"+item.id+"/tools"} tooltip={Lang('public.tools')} /> */}
                        {/* <FeatherIcon name="Users" access={access} url={nextAdmin+formUrl+"/"+item.id+"/students"} tooltip={Lang('public.students')} /> */}
                        <FeatherIcon name="Users" access={access} url={"#"} tooltip={Lang('public.students')} />
                        {/* <FeatherIcon name="Edit" access={access} url={nextAdmin+formUrl+"/"+item.id+"/edit"} tooltip={Lang('public.edit')} /> */}
                        <FeatherIcon name="Eye" url={nextAdmin+formUrl+"/"+item.id} tooltip={Lang('public.view')} />
                        {/* <FeatherIcon name="XOctagon" access={access} tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+formUrl+"/"+item.id)} /> */}
                    </div>
                </>
            },
        ],
    }

    useEffect(() => {
        if (!effectRan.current) {
            getNeedles(laraAdmin+formUrl+'/get-needles', setNeedles);
        }
        return () => effectRan.current = true;
    }, []);

    useEffect(() => {
        let urlItems = [];
        if(typeof params == "object"){
            Object.keys(params).forEach(key => urlItems.push(key+"="+params[key]))
            setUrl(laraAdmin+formUrl+"?"+urlItems.join("&"));
        }
    }, [params]);

    const filterList = (e, filter)=>{
        params[filter] = e.target.value;
        setParams({...params});
    }
    const clearFilter=()=>{
        setParams({})
    }

    return(<>
            <Frame title={Lang(["public.classes"])}>
            <Box shadow={false} minIcon={true} min={true}>
              
                <Select defaultValue={params?.year} key={Math.random()} onChange={(e)=>filterList(e, "year")} className="col-span-4" label="year">
                    {Tools.getArray(needles?.yearsemester).map((year, index)=>
                            <option key={index} value={year.year}> {year.year} </option>
                    )}
                </Select>
                <Select defaultValue={params?.semester} key={Math.random()} onChange={(e)=>filterList(e, "semester")} className="col-span-4" label="term">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Select>
                
              
                <ButtonContainer>
                    <Button label="clear_filter" className="btn btn-secondary w-24 w-20 mr-1 ml-1" onClick={clearFilter} />
                </ButtonContainer>
            </Box>
                <div className="intro-y col-span-12">
                    <Grid {...info} key={url} />
                </div>
            </Frame>
        </>
    );
}