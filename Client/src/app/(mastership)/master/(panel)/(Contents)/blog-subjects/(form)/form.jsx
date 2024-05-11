"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { Tab,TabHeader,TabBody,TabList,TabPanel } from "@/Theme/Midone/Forms/Tab";
import { Tools } from "@/Theme/Midone/Utils/Tools";

export default function Form({id}){
    const {activeLang,Lang} = useLang();
    const {laraAdmin } = useConfig();
    const formUrl = "/blog-subjects"; 
    let component = useFormRefs();
    const router = useRouter();
    let {save, get} = useData();
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return <>
            <Tab>
                <TabHeader>
                    {Tools.getArray(activeLang).map((lang, index)=>
                            <TabList href={lang.symbol} title={Lang('public.subject')} active={index==0?"true":""} >{lang.title}</TabList>
                    )}
                </TabHeader>
                <TabBody>
                    {Tools.getArray(activeLang).map((lang, index)=>
                        <TabPanel id={lang.symbol} active={index==0?"true":""}>
                            <Input className={"col-span-6 "+lang.dir} labelClassName={lang.dir} label= {"title_"+lang.symbol}
                                refItem={[component, "title_"+lang.symbol]} required="true"
                            />
                        </TabPanel>
                    )}
                </TabBody>
            </Tab>
            <Box shadow={false}>
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>  
        </>;
}