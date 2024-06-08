"use client";
import { View } from "@/Components/Homework/View"
import { useConfig } from "@/lib/config";

export default function ViewPage({params}){
    const {laraAdmin } = useConfig();

    return(
        <div>
            <View  id={params.toolsId} lesson={params.id} laraPath={laraAdmin} />
        </div>
    );
}
