"use client";
import { useConfig } from "@/lib/config";
import { StudentReport } from "@/Components/Users/StudentReport"

export default function Page({params}){
    const {laraAdmin } = useConfig();

    return(
        <div>
            <StudentReport laraPath={laraAdmin} course={params.id} id={params.stId} />
        </div>
    );
}