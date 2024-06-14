"use client";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box, Textarea } from "@/Theme/Midone/Forms";
import Link from 'next/link';
import { useLang } from '@/lib';

export function Form({courselaraPath,nextPath=""}){
    const {Lang} = useLang();
    const formUrl = "/post-subjects"; 
    let component = useFormRefs();
    const router = useRouter();
    let {save} = useData();
    let url = laraPath+formUrl, method = "new";

    let nextUrl = nextPath=="/master" ? "/courses/":nextPath+"/courses/" ; 

    const saveItem = ()=>save(url, component, method, nextUrl+course+"/tools/forum"+"?"+Math.random());
    const back = ()=>router.back();

    return <>
            <Box>
                <Input type="hidden" defaultValue={course} refItem={[component, "course_id"]} />
                <Input required="true" label="title" refItem={[component, "title"]} />
                <Textarea required="true" label="text" refItem={[component, "text"]} />
            </Box>
            <ButtonContainer>
                <Link className="btn btn-primary w-20 mr-1 ml-1" href={nextPath+"/courses/"+course+"/tools"}>{Lang(["public.tools_link"])}</Link>

                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>  
        </>;
}