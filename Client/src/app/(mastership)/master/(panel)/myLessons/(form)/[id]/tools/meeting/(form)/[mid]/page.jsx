"use client";
import { View } from "@/Components/Meeting/View"
import { useConfig } from "@/lib/config";

export default function Edit({params}){
    const {laraAdmin } = useConfig();

    return(
        <div>
            <View id={params.mid} lesson={params.id} laraPath={laraAdmin} />
        </div>
    );
}
