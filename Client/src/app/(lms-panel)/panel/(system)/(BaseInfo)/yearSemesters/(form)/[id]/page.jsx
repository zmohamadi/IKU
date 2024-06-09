"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData,useFormRefs,Tools } from "@/Theme/Midone";

export default function View({params}){
    const {laraAdmin } = useConfig();
    const {Lang} = useLang();
    let component = useFormRefs();
    let {get} = useData();
    const formUrl = "/yearSemesters"; 
    let id = params.id , url = laraAdmin+formUrl+"/"+id;
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;
    
    return(
        <>
            <div class="intro-y box col-span-12 xxl:col-span-6 mt-5">
                <div class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5">
                    <h2 class="font-medium text-base ml-auto"> {Lang("public.yearSemesters")} </h2>
                </div>
                <div class="tiny-slider py-5" id="today-schedule">
                    <div class="px-5 text-center sm:text-right">
                        <div class="font-medium text-lg pr-5">{data?.semester+" - "+data?.year}</div>
                        <div class="mt-5"> {Lang(["public.start","public.term"])+" : "+Tools?.formatDateSh(data?.start_date)}</div>
                        <div class="mt-3"> {Lang(["public.end","public.term"])+" : "+Tools?.formatDateSh(data?.end_date)}</div>
                    </div>
                </div>
            </div>
        </>
    );
}