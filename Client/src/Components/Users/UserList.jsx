"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid, Frame} from "@/Theme/Midone/Utils";
import { Button, ButtonContainer } from "@/Theme/Midone/Forms";
import { useRouter } from "next/navigation";

export function UserList({access  , url}){
    const router = useRouter();
    const back = ()=>router.back();
    const {Lang} = useLang();
    const {mediaPath } = useConfig();    
    let info = {
        url: url,
        columns: [
            {label: "pic", jsx:(item)=><img className="rounded-full" src={mediaPath+"/users/"+item.pic} width={50} height={50} alt="student" />},
            {label: "name", field: "name"},
            {label: "lname", field: "lname"},
            {label: "email", field: "email"},
            {label: "mobile", field: "mobile"}
        ],
    }

    return(
        <Frame title={Lang(["public.users"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
                <ButtonContainer>
                    <Button label="back" onClick={back} />
                </ButtonContainer>
            </div>
        </Frame>
    );
}