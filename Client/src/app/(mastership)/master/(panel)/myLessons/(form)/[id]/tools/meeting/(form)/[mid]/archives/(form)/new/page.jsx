"use client";
import { Form } from "@/Components/Meeting/Archives/Form"
import { useConfig } from "@/lib/config";

export default function Edit({params}){
    const {laraAdmin } = useConfig();
    const toolsId = params?.mid;
    const lesson =  params?.id;
    return(
        <div>
            <Form toolsId={toolsId} lesson={lesson} laraPath={laraAdmin} />
        </div>
    );
}
