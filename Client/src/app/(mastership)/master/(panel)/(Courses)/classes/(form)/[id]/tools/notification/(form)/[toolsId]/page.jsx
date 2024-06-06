"use client";
import { View } from "@/Components/Notification/View"
import { useConfig } from "@/lib/config";

export default function Edit({params}){
    const {laraAdmin } = useConfig();

    return(
        <div>
            <View id={params.toolsId} course={params.id} laraPath={laraAdmin} />
        </div>
    );
}