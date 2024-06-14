"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useData,useFormRefs,Input,Button,ButtonContainer,CheckBox } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { CKEditor } from "@/Theme/Midone/Forms/Ckeditor";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { useRouter } from 'next/navigation';
import { Tools } from "@/Theme/Midone/Utils/Tools";

export function Form({laraPath,id,nextPath=""}){
    const {Lang,local,dir} = useLang();
    const router = useRouter();
    const formUrl = "/courses" ; 
    let component = useFormRefs();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    let url = laraPath+formUrl, method = "new", key = 0;
    if(id != 0 && id != undefined) url = laraPath+formUrl+"/"+id, method = "edit";
    let uploadUrl=laraPath+"/upload/.-media-courses";
    let deleteUrl=laraPath+"/deleteFile/.-media-courses";
    let uploadDir='media/courses/';

    useEffect(() => {
        getNeedles(laraPath+formUrl+'/get-needles', setNeedles);
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, nextPath+formUrl+"?"+Math.random());
    const back = ()=>router.back();

    return <>
        <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
            <h2 className={"text-lg font-medium" + (dir=='rtl' ? " ml-auto" : " mr-auto")}>
                {Lang(["public.course"])}
            </h2>
        </div>
        <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
            <div className="intro-y col-span-12 lg:col-span-8">
                <Input  label= "title" refItem={[component, "title"]} required="true" />
                <div className="post intro-y p-3 box mt-5 ">
                   
                    <CKEditor required="true" refItem={[component, "description"]} />
                    <Dropzone required="true" refItem={[component, "thumbnail"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} />
                </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
                <div className="intro-y box p-5">
                        <Input  label= "course_code" refItem={[component, "code"]} required="true" />
                        <SelectTail key={"system"+needles?.system?.length} required="true" label="system" refItem={[component, "system_id"]} data={needles?.system} titleKey={"title"} />
                        <SelectTail key={"category"+needles?.coursecategory?.length} required="true" label="category" refItem={[component, "category_id"]} data={needles?.coursecategory} titleKey={"title_"+local} />
                        {/* <SelectTail label="keywords" refItem={[component, "keywords_id"]} defaultValue={component?.state?.info?.keywords}
                                data={needles?.keyword} titleKey={"title"} multiple="true" key={"keywords_id"+needles?.keyword?.length} /> */}
                        <CheckBox label="status"  name={Lang('public.active')} refItem={[component, "status_id"]} />

                </div>
            </div>
        </div>
        <ButtonContainer>
            <Button label="save" onClick={saveItem} />
            <Button label="back" onClick={back} />
        </ButtonContainer>
        </>;
}