"use client";
import { View } from "@/Components/Survey/View"
import { useConfig } from "@/lib/config";

export default function Edit({params}){
    const {laraAdmin } = useConfig();

    return(
        <div>
            <View id={params.survey_id} lesson={params.id} laraPath={laraAdmin} />
        </div>
    );
}
