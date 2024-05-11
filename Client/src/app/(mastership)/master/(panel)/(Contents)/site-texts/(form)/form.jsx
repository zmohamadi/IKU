"use client";
import { useEffect } from "react";
import { useConfig } from "@/lib/config";
import { useLang } from "@/lib/lang";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box } from "@/Theme/Midone/Forms";
import { Tab,TabHeader,TabBody,TabList,TabPanel } from "@/Theme/Midone/Forms/Tab";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { Tools } from "@/Theme/Midone/Utils/Tools";
import { CKEditor } from "@/Theme/Midone/Forms/Ckeditor";

export default function Form({id}){
    const formUrl = "/site-texts";
    const {Lang,activeLang} = useLang();
    const {laraAdmin } = useConfig();
    const router = useRouter();
    let component = useFormRefs();
    let {save, get} = useData();
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    let uploadUrl=laraAdmin+"/upload/.-media-sitetext";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-sitetext";
    let uploadDir='media/sitetext/';

    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return <>
            <Tab>
                <TabHeader>
                    {Tools.getArray(activeLang).map((lang, index)=>
                            <TabList href={lang.symbol} title={Lang('public.site_texts')} active={index==0?"true":""} >{lang.title}</TabList>
                    )}
                </TabHeader>
                <TabBody>
                    {Tools.getArray(activeLang).map((lang, index)=>
                        <TabPanel id={lang.symbol} active={index==0?"true":""}>
                            <Input className={"col-span-12 "+lang.dir}
                                labelClassName={lang.dir}
                                label= {"title_"+lang.symbol}
                                refItem={[component, "title_"+lang.symbol]} required="true"
                            />
                            <CKEditor className={"col-span-12 "+lang.dir} label= {"text_"+lang.symbol} labelClassName={lang.dir}
                                refItem={[component, "text_"+lang.symbol]} required="true" />
                            
                        </TabPanel>
                    )}
                </TabBody>
            </Tab>
            <Box shadow={false}>
                <div className="col-span-6">
                    <Input label="link" refItem={[component, "link"]} />
                </div>
                <Dropzone refItem={[component, "image"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} />
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
        </>;
}