"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,CheckBox } from "@/Theme/Midone/Forms";
import { Tab,TabHeader,TabBody,TabList,TabPanel } from "@/Theme/Midone/Forms/Tab";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { CKEditor } from "@/Theme/Midone/Forms/Ckeditor";

export default function Form({id}){
    const formUrl = "/blogs"; 
    const {laraAdmin } = useConfig();
    const {Lang,local} = useLang();
    let component = useFormRefs();
    const router = useRouter();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    let uploadUrl=laraAdmin+"/upload/.-media-blogs";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-blogs";
    let uploadDir='media/blogs/';

    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        getNeedles(laraAdmin+formUrl+'/get-needles', setNeedles);
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return <>
            <Tab>
                <TabHeader>
                    <TabList href="tab-first" title={Lang('public.info')} active={"true"}>{Lang("public.info")}</TabList>
                    <TabList href="tab-second" title={Lang('public.description')}>{Lang("public.description")}</TabList>
                </TabHeader>
                <TabBody>
                    <TabPanel id="tab-first" active={"true"}>
                        <Input required="true" label="title" refItem={[component, "title"]} />
                        <SelectTail required="true" label="subject" refItem={[component, "subject_id"]} data={needles?.blogsubject} titleKey={"title_"+local} />
                        <SelectTail className="col-span-12" label="keyword" multiple="true" refItem={[component, "keyword_id"]} data={needles?.keyword} />
                        <Dropzone required="true" refItem={[component, "thumb"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} />
                        <Dropzone required="true" refItem={[component, "image"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} />
                        <CheckBox label="status"  name={Lang('public.active')} refItem={[component, "status_id"]} />
                    </TabPanel>
                    <TabPanel id="tab-second">
                        <CKEditor required="true" label="summary" refItem={[component, "summary"]} />
                        <CKEditor required="true" label="text" refItem={[component, "text"]} />
                    </TabPanel>
                </TabBody>
            </Tab>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
        </>;
}