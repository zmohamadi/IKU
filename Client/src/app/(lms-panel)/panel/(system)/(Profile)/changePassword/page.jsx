"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Box, Button, ButtonContainer, Input, useData, useFormRefs } from "@/Theme/Midone";
import { useRouter } from "next/navigation";


export default function page(){
    const {Lang,activeLang,local} = useLang();
    const {laraAdmin } = useConfig();
    const formUrl = "/users/change-password" ; 
    let component = useFormRefs();
    let {save} = useData();
    let url = laraAdmin+formUrl, method = "edit";
    const router = useRouter();


    const saveItem = ()=>save(url, component, method, "/dashboard");
    const back = ()=>router.back();

    return <>
            <Box title={Lang(["public.change", "public.password"])}>
                {/* <Input className="col-span-12" required="true" label="old_password" refItem={[component, "old_password"]} /> */}
                <Input required="true" label="new_password" refItem={[component, "new_password"]} />
                <Input required="true" label="new_password_confirmation" refItem={[component, "new_password_confirmation"]} />
            </Box>
            <ButtonContainer>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
   
            </>;

    
}