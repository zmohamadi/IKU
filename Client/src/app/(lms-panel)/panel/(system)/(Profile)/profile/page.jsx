"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useAuth } from "@/lib/auth";
import { useData,useFormRefs,Button,ButtonContainer,Box } from "@/Theme/Midone/Forms";
import { Perspnnel } from "@/Components/Public/FormUsers/Perspnnel";

export default function page(){
    const {Lang} = useLang();
    const {laraAdmin} = useConfig();
    const formUrl = "/personnels"; 
    const {user} = useAuth({guard: "admin"});
    const id = user?.id;
    let component = useFormRefs();
    let {save, get} = useData();

    let url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        get(url, component, "info");
    }, []);
    
    const saveItem = ()=>save(url, component, method, "/dashboard");

    return <>
            <Box title={Lang(["public.personnel"])}>
                <Perspnnel parent={component} laraUrl={laraAdmin} />
            </Box>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
        </>;
}