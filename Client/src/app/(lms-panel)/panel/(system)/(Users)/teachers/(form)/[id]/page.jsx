"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData, useFormRefs,Tools } from "@/Theme/Midone";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function View({params}){
    const {Lang,local} = useLang();
    const {laraAdmin,mediaPath,nextAdmin } = useConfig();
    let component = useFormRefs();
    let {get} = useData();
    
    const router = useRouter();
    const back = ()=>router.back();

    const formUrl = "/users"; 
    let id = params.id , url = laraAdmin+formUrl+"/show-info/"+id;

    useEffect(() => {get(url, component, "info");}, []);

    let item = component?.state?.info?.item;
    let registers = component?.state?.info?.registers;

    return(
        <>
            <div className="content">
                <div className="intro-y flex items-center mt-8">
                    <h2 className="text-lg font-medium ml-auto"> {Lang("public.view_info")} </h2>
                </div>
                <div className="grid grid-cols-12 gap-6 mt-5">
                    <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
                        <div className="intro-y box mt-5 lg:mt-0">
                            <div className="relative flex items-center p-5">
                                <div className="w-12 h-12 image-fit">
                                    <img alt={item?.firstname+" "+item?.lastname} className="rounded-full" src={mediaPath+"/users/"+item?.photo} />
                                </div>
                                <div className="mr-4 ml-auto">
                                    <div className="font-medium text-base">{item?.role?.["title_"+local]+" : "+item?.firstname+" "+item?.lastname}</div>
                                    {/* <div className="text-gray-600">{item?.studentID}</div> */}
                                </div>
                                {/* <div className="dropdown">
                                    <a className="dropdown-toggle w-5 h-5 block" href="#" aria-expanded="false"> <i data-feather="more-horizontal" className="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                    <div className="dropdown-menu w-56">
                                        <div className="dropdown-menu__content box dark:bg-dark-1">
                                            <div className="p-4 border-b border-gray-200 dark:border-dark-5 font-medium">گزینه های خروجی</div>
                                            <div className="p-2">
                                                <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="activity" className="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i> انگلیسی </a>
                                                <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                                                    <i data-feather="box" className="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i> اندولوزی
                                                    <div className="text-xs text-white px-1 rounded-full bg-theme-24 mr-auto">10</div>
                                                </a>
                                                <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="layout" className="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i> انگلیسی </a>
                                                <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="sidebar" className="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i> اندولوزی</a>
                                            </div>
                                            <div className="px-3 py-3 border-t border-gray-200 dark:border-dark-5 font-medium flex">
                                                <button type="button" className="btn btn-primary py-1 px-2">تنظیمات</button>
                                                <button type="button" className="btn btn-secondary py-1 px-2 mr-auto">مشاهده پروفایل</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="p-5 border-t border-gray-200 dark:border-dark-5">
                                <a className="flex items-center text-theme-17 dark:text-white font-medium" href=""> <i data-feather="activity" className="w-4 h-4 ml-2"></i> درس ها </a>
                                <a className="flex items-center mt-5" href=""> <i data-feather="box" className="w-4 h-4 ml-2"></i> آزمون ها </a>
                                <a className="flex items-center mt-5" href=""> <i data-feather="box" className="w-4 h-4 ml-2"></i> حضور وغیاب </a>
                            </div>
                            <div className="p-5 border-t border-gray-200 dark:border-dark-5">
                                <a className="flex items-center" href={nextAdmin+"/changePassword"}>
                                    <i data-feather="lock" className="w-4 h-4 ml-2"></i> تغییر رمزعبور
                                </a>
                                <a class="flex items-center" href=""> <i data-feather="activity" class="w-4 h-4 ml-2 mt-3"></i> تنظیمات ایمیل </a>
                            </div>
                            <div className="p-5 border-t border-gray-200 dark:border-dark-5 flex">
                                {/* <button type="button" className="btn btn-primary py-1 px-2"><Link to={"/users/"+item?.id+"/edit"} > ویرایش اطلاعات </Link></button> */}
                                {/* <button type="button" className="btn btn-outline-secondary py-1 px-2 mr-auto">لینک سریع جدید </button> */}
                            </div>
                        </div>
                        <div className="intro-y box p-5 bg-theme-17 text-white mt-5">
                            <div className="flex items-center">
                                <div className="font-medium text-lg">{Lang("public.gender")+" : "+item?.gender?.["title_"+local]}</div>
                                {/* <div className="text-xs bg-white dark:bg-theme-17 dark:text-white text-gray-800 px-1 rounded-md mr-auto">جدید</div> */}
                            </div>
                            <div className="mt-4">
                                <p>{Lang("public.mobile")+" : "+item?.mobile}</p>
                                <p className="mt-3">{Lang("public.email")+" : "+item?.email}</p>
                                <p className="mt-3">{Lang("public.studentID")+" : "+item?.studentID}</p>
                                <p className="mt-3">{Lang("public.code")+" : "+item?.person_id}</p>
                                <p className="mt-3">{Lang("public.mobile")+" : "+item?.status_id}</p>
                            </div>
                            <div className="font-medium flex mt-5">
                                <span
                                    className={"btn py-1 px-2 border-white dark:border-gray-700 dark:text-gray-300 mr-auto btn-cursor-default text-"+item?.active_status?.color}>
                                    {item?.active_status?.["title_"+local]}
                                </span>
                                {/* <button type="button" className="btn py-1 px-2 border-white text-white dark:border-gray-700 dark:text-gray-300">فعالیت</button>
                                <button type="button" className="btn py-1 px-2 border-transparent text-white dark:text-gray-500 mr-auto">رد کردن</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
                        <div className="grid grid-cols-12 gap-6">
                            {registers?.map((register, i)=>{
                                return <>
                                    <div className="intro-y box col-span-12 xxl:col-span-6">
                                        <div className="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5">
                                            <h2 className="font-medium text-base ml-auto">{"دروس سال : "+register?.semester+" - "+register?.year}</h2>
                                            <div className="dropdown mr-auto sm:hidden">
                                                <a className="dropdown-toggle w-5 h-5 block" href="#" aria-expanded="false"> <i data-feather="more-horizontal" className="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                                <div className="dropdown-menu w-40">
                                                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                                        <a href="#" className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="file" className="w-4 h-4 ml-2"></i> دانلود فایل اکسل</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <button className="btn btn-outline-secondary hidden sm:flex"> <i data-feather="file" className="w-4 h-4 ml-2"></i> دانلود فایل اکسل</button> */}
                                        </div>
                                        <div className="p-5">
                                            <div className="relative flex items-center">
                                                <div className="w-12 h-12 flex-none image-fit">
                                                    <img alt={item?.title} className="rounded-full" src={mediaPath+"/lessons/"+register?.lesson?.thumbnail}/>
                                                </div>
                                                <div className="mr-4 ml-auto">
                                                    <a href="" className="font-medium">{register?.["title"]}</a> 
                                                    <div className="text-gray-600 ml-5  mt-3 sm:mr-5"l>{"شروع : "+Tools?.formatDateSh(register?.date_start)}</div>
                                                    <div className="text-gray-600 ml-5  mt-3 sm:mr-5"l>{"پایان : "+Tools?.formatDateSh(register?.date_end)}</div>
                                                    {/* <div className="text-gray-600 ml-5  mt-3 sm:mr-5"l>{"پایان : "+register?.date_end}</div>
                                                    <div className="text-gray-600 ml-5 sm:mr-5"l>{"شروع : "+register?.date_start}</div> */}
                                                </div>
                                                <div className="font-medium text-gray-700 dark:text-gray-500">{register?.code}</div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}