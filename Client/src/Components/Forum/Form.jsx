"use client";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box, Textarea } from "@/Theme/Midone/Forms";
import { useLang } from "@/lib/lang";
import Link from 'next/link';

export function Form({lessontoolsId,laraPath, nextPath=""}){
    
    const formUrl = "/posts"; 
    const {Lang} = useLang();
    let component = useFormRefs();
    const router = useRouter();
    let {save} = useData();

    let url = laraPath+formUrl, method = "new";

    // console.log(nextPath);

    let nextUrl = nextPath=="/master" ? "/lessons/":nextPath+"/lessons/" ; 

    const saveItem = ()=>save(url, component, method, nextUrl+lesson+"/tools/forum/"+toolsId+"/posts"+"?"+Math.random());
    const back = ()=>router.back();

    return <>
            <Box title={Lang(["public.post"])}>
                <Input type="hidden" defaultValue={lesson} refItem={[component, "lesson_id"]} />
                <Input type="hidden" defaultValue={toolsId} refItem={[component, "subject_id"]} />
                <Textarea required="true" label="text" refItem={[component, "text"]} />
            </Box>
            <ButtonContainer>
                <Link className="btn btn-primary w-20 mr-1 ml-1" href={nextPath+"/lessons/"+lesson+"/tools"}>{Lang(["public.tools_link"])}</Link>
                <Button label="back" onClick={back} />
                <Button label="save" onClick={saveItem} />
            </ButtonContainer>
        </>;
}