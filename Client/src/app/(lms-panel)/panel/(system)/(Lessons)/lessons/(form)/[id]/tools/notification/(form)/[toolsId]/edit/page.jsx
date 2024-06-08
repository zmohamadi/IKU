"use client";
import { Form } from "@/Components/Notification/Form"
import { useConfig } from "@/lib/config";

export default function Edit({params}){
    const {laraAdmin } = useConfig();

    return(
        <div>
            <Form id={params.toolsId} lesson={params.id} laraPath={laraAdmin} />
        </div>
    );
}
