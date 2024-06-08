"use client";
import { useAuth } from "@/lib/auth";

import {Edit as Teacher} from '../../(Users)/teachers/(form)/[id]/edit/page';
import {Edit as Student} from '../../(Users)/students/(form)/[id]/edit/page';
import {Edit as Personnel} from '../../(Users)/personnels/(form)/[id]/edit/page';

export default function EditProfile(){
    const {user} = useAuth({guard: "admin"});
    const id = user?.id;
    const role = user?.role_id;

    let display = <Personnel id={id} />
    if(role == 1)
        display = <Teacher id={id} />
    else if(role == 2)
        display = <Student id={id} />
        
    return(
        <div>{display}</div>
    );
}