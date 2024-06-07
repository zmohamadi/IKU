"use client";
import { View } from "@/Components/Resource/View"
import { useConfig } from "@/lib/config";

export default function Edit({params}){
    const {laraAdmin } = useConfig();

    return(
        <div>
            <View id={params.toolsId} lesson={params.id} laraPath={laraAdmin} />
        </div>
    );
}
