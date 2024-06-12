"use client";

import  {GeneralReport}  from "@/Components/Dashboard/GeneralReport";
import { Mentees } from "@/Components/Dashboard/Mentees";
import { useConfig } from "@/lib/config";
import { useFormRefs } from "@/Theme/Midone";
import { useData } from "@/Theme/Midone/Utils/Data";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";

export default function Dashboard() {
    const { Lang } = useLang();
    const {laraAdmin,nextAdmin} = useConfig();
    let {get} = useData();
    let component = useFormRefs();

    // useEffect(() => {
    //     get(laraAdmin+"/home", component, "info");
    // }, []);

    // console.log(component?.state?.info);
    let info  = component?.state?.info;
    return <>
        {/* <div> Dashboard!! </div> */}
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 xxl:col-span-9">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 mt-6 -mb-6 intro-y">
                        <div className="alert alert-dismissible show box bg-theme-26 text-white flex items-center mb-6" role="alert">
                            {Lang(["public.wellcome","public.to","public.main_title"])}
                        </div>
                        {/* <GeneralReport data={info?.counts} /> */}
                    </div>
                        {/* <div className="col-span-6 mt-6">
                            <Mentees data={info?.mentees} title="last_request_in_mentorship" rel="mentee_requests" href={nextAdmin+"/mentees"} />
                        </div>
                        <div className="col-span-6  mt-6">
                            <Mentees data={info?.enroll} title="last_request_in_lessons" rel="enroll_requests" href={nextAdmin+"/mentees"} />
                        </div> */}
                </div>
            </div>
        </div>
    </>
}