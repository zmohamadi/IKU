"use client";
import { Form } from "@/Components/Meeting/Form"
import { useConfig } from "@/lib/config";

export default function Edit({params}){
    const {laraAdmin } = useConfig();

    return(
        <div>
            <Form lesson={params.id} laraPath={laraAdmin} />
        </div>
    );
}
