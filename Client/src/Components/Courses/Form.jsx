"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useData,useFormRefs,Input,Button,ButtonContainer,CheckBox, DatePicker } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { CKEditor } from "@/Theme/Midone/Forms/Ckeditor";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { useRouter } from 'next/navigation';
import { Tools } from "@/Theme/Midone/Utils/Tools";

export function Form({laraPath,id}){
    const {Lang,local,dir} = useLang();
    const router = useRouter();
    const formUrl = "/courses" ; 
    let component = useFormRefs();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    let url = laraPath+formUrl, method = "new", key = 0;
    if(id != 0 && id != undefined) url = laraPath+formUrl+"/"+id, method = "edit";
    let uploadUrl=laraPath+"/upload/.-media-course";
    let deleteUrl=laraPath+"/deleteFile/.-media-course";
    let uploadDir='media/course/';

    useEffect(() => {
        getNeedles(laraPath+formUrl+'/get-needles', setNeedles);
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl+"?"+Math.random());
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
                    <SelectTail label="session_managers" refItem={[component, "session_managers"]}
                        multiple="true" key={"session_managers"+needles?.sessionmanager?.length} defaultValue={component?.state?.info?.managers} >
                        {Tools.getArray(needles?.sessionmanager).map((manager, index)=>
                                <option key={index} value={manager.id}> {manager.name+" "+manager.lname} </option>
                        )}
                    </SelectTail>
                    <CKEditor required="true" refItem={[component, "objectives"]} />
                    <CKEditor required="true" refItem={[component, "description"]} />
                    <Dropzone required="true" refItem={[component, "thumbnail"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} />
                </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
                <div className="intro-y box p-5">
                        <SelectTail label="teacher" key={"teacher"+needles?.teacher?.length} refItem={[component, "instructor_id"]} defaultValue={component?.state?.info?.instructor_id} required="true" >
                            {Tools.getArray(needles?.teacher).map((teach, index)=>
                                    <option key={index} value={teach.id}> {teach.name+" "+teach.lname} </option>
                            )}
                        </SelectTail>
                    
                        <SelectTail key={"level"+needles?.courselevel?.length} required="true" label="level" refItem={[component, "level_id"]} data={needles?.courselevel} titleKey={"title_"+local} />
                        <SelectTail key={"category"+needles?.coursecategory?.length} required="true" label="category" refItem={[component, "category_id"]} data={needles?.coursecategory} titleKey={"title_"+local} />
                        <DatePicker  label= "start_date" refItem={[component, "start_date"]} required="true" />
                        <DatePicker  label= "end_date" refItem={[component, "end_date"]} required="true" />
                        <DatePicker  label= "registration_end_date" refItem={[component, "registration_end_date"]} required="true" />
                        <Input  label= "duration" refItem={[component, "duration"]} required="true" />
                        <Input  label= "order" placeholder={"please enter integer"} refItem={[component, "order"]} />
                        <SelectTail label="keywords" refItem={[component, "keywords_id"]} defaultValue={component?.state?.info?.keywords}
                                data={needles?.keyword} titleKey={"title"} multiple="true" key={"keywords_id"+needles?.keyword?.length} />
                        <CheckBox label="status"  name={Lang('public.active')} refItem={[component, "status_id"]} />
                        <CheckBox label="home"  name={Lang('public.display')} refItem={[component, "display_home"]} />


                </div>
            </div>
        </div>
        <ButtonContainer>
            <Button label="back" onClick={back} />
            <Button label="save" onClick={saveItem} />
        </ButtonContainer>
        </>;
}