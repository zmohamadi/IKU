"use client";
import { UserList } from "@/Components/Users/UserList"
import { useConfig } from "@/lib/config";

export default function page({params}){
    const {laraAdmin } = useConfig();
    const toolsId = params.mid;
    let url= laraAdmin+"/meeting/"+toolsId+"/students";

    return(
        <div>
            <UserList url={url} access={true} />
        </div>
    );
}