"use client";
import { useConfig } from "@/lib/config";
import { Form } from "@/Components/Quiz/Form"

export default function Edit({params}){
    const {laraAdmin } = useConfig();

    return(
        <div>
            <Form  id={params.toolsId} lesson={params.id} laraPath={laraAdmin} />
        </div>
    );
}
