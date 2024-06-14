"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
import { Select } from "@/Theme/Midone/Forms/Select";
import { Tools } from "@/Theme/Midone";

export default function Form({params}){
    const {Lang, local} = useLang();
    const {mediaPath, laraAdmin, nextAdmin} = useConfig();
    const router = useRouter();
    let component = useFormRefs();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    const formUrl = "/classes" ; 
    let url = laraAdmin+formUrl, key = 0;
    let id = params?.id ;
    let method = "edit";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id;

    useEffect(() => {
        getNeedles(laraAdmin+'/classes/present/get-needles', setNeedles);
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, link);
    const back = ()=>router.back();

    return <>
            <Box>
                <Select className="col-span-4" key={Math.random()} onChange={(e)=>filterList(e, "teachers")} label="teachers">
                    {Tools.getArray(needles?.teachers).map((teacher, index)=>
                            <option key={index} value={teacher.id}> {teacher.firstname} {teacher.lastname} </option>
                    )}
                </Select>
                <Select defaultValue="1403"  className="col-span-4" key={Math.random()} onChange={(e)=>filterList(e, "year")} label="year">
                    {Tools.getArray(needles?.year).map((year, index)=>
                            <option key={index} value={year.year}> {year.year} </option>
                    )}
                </Select>
                
                <Select defaultValue="1"  className="col-span-4" key={Math.random()} onChange={(e)=>filterList(e, "semester")} label="term">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Select>
            </Box>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>;
}