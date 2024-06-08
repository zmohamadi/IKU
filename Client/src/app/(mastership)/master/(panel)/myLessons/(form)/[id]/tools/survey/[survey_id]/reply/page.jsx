"use client";
import { Reply } from "@/Components/Survey/Reply"
import { useConfig } from "@/lib/config";

export default function Edit({params}){
    const {laraAdmin } = useConfig();

    return(
        <div>
            <Reply id={params.survey_id} lesson={params.id} laraPath={laraAdmin} />
        </div>
    );
}
