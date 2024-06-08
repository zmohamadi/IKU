"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';

export default function Form({id, link="/users", roleFilter=""}){
    const {activeLang, Lang} = useLang();
    const {laraAdmin, nextAdmin} = useConfig();
    const router = useRouter();
    let component = useFormRefs();
    let {save, get} = useData();

    let url = laraAdmin+link, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+link+"/"+id, method = "edit";

    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, link);
    const back = ()=>router.back();

    return <>
            <Box title={Lang(["public.roles"])}>
                <Input className="col-span-6" label= "title_fa"
                    refItem={[component, "title_fa"]} required="true"
                />
                <Input className={"col-span-6 "+lang.dir} label= "title_en"
                    refItem={[component, "title_en"]} required="true"
                />
                {/* {activeLang?.map((lang, index)=>
                    <Input className={"col-span-6 "+lang.dir} labelClassName={lang.dir} label= {"title_"+lang.symbol}
                        refItem={[component, "title_"+lang.symbol]} required="true"
                    />
                )} */}
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
        </>;
}