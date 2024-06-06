"use client";
import { useConfig } from "@/lib/config";
import { StudentStatus } from "@/Components/Users/StudentStatus"

export default function Page({params}){
    const {laraAdmin,nextAdmin } = useConfig();

    return(
        <div>
            <StudentStatus laraPath={laraAdmin} nextPath={nextAdmin} course={params.id} />
        </div>
    );
}