"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData,useFormRefs,Tools } from "@/Theme/Midone";

export default function View({params}){
    const {Lang} = useLang();
    const { mediaPath, laraAdmin} = useConfig();
    let component = useFormRefs();
    let {get} = useData();
    const formUrl = "/systems"; 
    let id = params.id , url = laraAdmin+formUrl+"/"+id;
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;
    
    return(
        <>
            <div class="pos intro-y grid grid-cols-12 gap-5 mt-5">
                <div class="intro-y col-span-12 lg:col-span-4">
                    <div class="grid grid-cols-12 gap-5 mt-5 pt-5 border-t border-theme-25">
                        <a href="javascript:;" data-toggle="modal" data-target="#add-item-modal" class="intro-y block col-span-12 sm:col-span-12 xxl:col-span-3">
                            <div class="box rounded-md p-3 relative zoom-in btn-cursor-default">
                                <div class="flex-none pos-image relative block">
                                    <div class="pos-image__preview image-fit">
                                        <img alt={data?.title} src={mediaPath+"/systems/"+data?.photo} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-8">
                    <div className="intro-y col-span-8 md:col-span-8 xl:col-span-8 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3">
                        <div className="mt-5 intro-x">
                            <div className="box zoom-in btn-cursor-default">
                                <div className="tiny-slider" id="important-notes">
                                    <div className="p-5"> 
                                        <div className="text-base font-medium truncate">{data?.title}</div>
                                        <div className="text-gray-500 mt-3">{Lang("public.api")+" : "}</div>{data?.api_key}
                                        <div className="text-gray-500 mt-3">{Lang("public.ip")+" : "}</div>{data?.ip}
                                        <div className="text-gray-500 mt-3">{Lang("public.domain")+" : "}</div>{data?.domain}
                                        <div className="text-gray-600 mt-3">{Lang("public.description")+" : "}</div>
                                        <span dangerouslySetInnerHTML={{ __html: data?.description }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}