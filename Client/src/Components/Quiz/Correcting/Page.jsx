"use client";
import { useLang } from "@/lib/lang";
import { Grid,Frame,FeatherIcon } from "@/Theme/Midone/Utils";
import { Button, ButtonContainer } from "@/Theme/Midone/Forms";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Page({laraPath,lesson,toolsId,nextPath=""}){
    const router = useRouter();
    const back = ()=>router.back();
    const {Lang} = useLang();
    let formUrl = nextPath+"/lessons/"+lesson+"/tools/quiz/"+toolsId+"/correcting/";    
    let info = {
        // insertLink: nextAdmin+formUrl+"/new",
        url: laraPath+"/quiz-answers/"+toolsId,
        columns: [
            {label: "student", jsx: (item)=><span>{item.name + " "+item.lname }</span>},
            {label: "email", field: "email"},
            {label: "start", jsx: (item)=><span>{item.attemps?.[0]?.start_at}</span>},
            {label: "end", jsx: (item)=><span>{item.attemps?.[0]?.end_at}</span>},
            {label: "score", jsx: (item)=><span>{item.attemps?.[0]?.total_score ? item.attemps?.[0]?.total_score+"/"+item.attemps?.[0]?.quiz_score:""}</span>},
            {label: "",
                sort:false,
                jsx:(item)=><>
                    <div className='flex justify-center '>
                      
                       <FeatherIcon name="CheckSquare" url={formUrl+item.id+"/attemp"} tooltip={Lang('public.correcting')} /> 
                       
                       
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.students"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
                <ButtonContainer>
                    <Link className="btn btn-primary w-20 mr-1 ml-1" href={nextPath+"/lessons/"+lesson+"/tools"}>{Lang(["public.tools_link"])}</Link>
                    <Button label="back" onClick={back} />
                </ButtonContainer>
            </div>
        </Frame>
    );
}