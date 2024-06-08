"use client";
import { Reply } from "@/Components/Homework/Reply"
// import { Reply } from "@/Components/HomeWork/ReplyMultiPage"
import { useConfig } from "@/lib/config";

export default function page({params}){
    const {laraAdmin } = useConfig();

    return(
        <div>
            <Reply id={params.toolsId} lesson={params.id} laraPath={laraAdmin} />
        </div>
    );
}
