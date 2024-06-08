"use client";
import { useAuth } from "@/lib/auth";

import {Form as Teacher} from '../../(Users)/teachers/(form)/[id]/edit/page';
import {Form as Student} from '../../(Users)/students/(form)/[id]/edit/page';
import {Form as Personnel} from '../../(Users)/personnels/(form)/[id]/edit/page';

export default function EditProfile(){
    const {user} = useAuth({guard: "admin"});
    const id = user?.id;
    
    if(id == 1)
        return(
            <div>
                <Teacher ></Teacher>
            </div>
        );
    else if(id == 2)
        return(
            <div>
                <Student ></Student>
            </div>
        );
    else if(id > 2)
        return(
            <div>
                <Personnel ></Personnel>
            </div>
        );
}