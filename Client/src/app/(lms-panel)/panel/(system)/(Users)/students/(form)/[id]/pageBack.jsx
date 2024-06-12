"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Box, Button, ButtonContainer, FeatherIcon, useData, useFormRefs } from "@/Theme/Midone";
import { useRouter } from 'next/navigation';

export default function View({params}){
    const router = useRouter();
    const back = ()=>router.back();

    const {laraAdmin,mediaPath } = useConfig();
    const {Lang} = useLang();
    const formUrl = "/users"; 
    let id = params.id , url = laraAdmin+formUrl+"/show-info/"+id;
    let component = useFormRefs();
    let {get} = useData();
    useEffect(() => {get(url, component, "info");}, []);
    let data = component?.state?.info;

    return(<>
            <div className="content">
                <div className="intro-y flex items-center mt-8">
                    <h2 className="text-lg font-medium ml-auto">
                    چینش پروفایل
                    </h2>
                </div>
                <div className="grid grid-cols-12 gap-6 mt-5">
                    <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
                        <div className="intro-y box mt-5 lg:mt-0">
                            <div className="relative flex items-center p-5">
                                <div className="w-12 h-12 image-fit">
                                    <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg"/>
                                </div>
                                <div className="mr-4 ml-auto">
                                    <div className="font-medium text-base">تام کروز</div>
                                    <div className="text-gray-600">مهندس نرم افزار</div>
                                </div>
                                <div className="dropdown">
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
                                </div>
                            </div>
                            <div className="p-5 border-t border-gray-200 dark:border-dark-5">
                                <a className="flex items-center text-theme-17 dark:text-white font-medium" href=""> <i data-feather="activity" className="w-4 h-4 ml-2"></i> اطلاعات شخصی </a>
                                <a className="flex items-center mt-5" href=""> <i data-feather="box" className="w-4 h-4 ml-2"></i> تنظیمات اکانت </a>
                                <a className="flex items-center mt-5" href=""> <i data-feather="lock" className="w-4 h-4 ml-2"></i> تغییر رمزعبور </a>
                                <a className="flex items-center mt-5" href=""> <i data-feather="settings" className="w-4 h-4 ml-2"></i> تنظیمات کاربر </a>
                            </div>
                            <div className="p-5 border-t border-gray-200 dark:border-dark-5">
                                <a className="flex items-center" href=""> <i data-feather="activity" className="w-4 h-4 ml-2"></i> تنظیمات ایمیل </a>
                                <a className="flex items-center mt-5" href=""> <i data-feather="box" className="w-4 h-4 ml-2"></i> ذخیره کارت اعتباری </a>
                                <a className="flex items-center mt-5" href=""> <i data-feather="lock" className="w-4 h-4 ml-2"></i> شبکه های اجتماعی </a>
                                <a className="flex items-center mt-5" href=""> <i data-feather="settings" className="w-4 h-4 ml-2"></i> اطلاعات مالیاتی </a>
                            </div>
                            <div className="p-5 border-t border-gray-200 dark:border-dark-5 flex">
                                <button type="button" className="btn btn-primary py-1 px-2">گروه جدید </button>
                                <button type="button" className="btn btn-outline-secondary py-1 px-2 mr-auto">لینک سریع جدید </button>
                            </div>
                        </div>
                        <div className="intro-y box p-5 bg-theme-17 text-white mt-5">
                            <div className="flex items-center">
                                <div className="font-medium text-lg">به روز رسانی مهم</div>
                                <div className="text-xs bg-white dark:bg-theme-17 dark:text-white text-gray-800 px-1 rounded-md mr-auto">جدید</div>
                            </div>
                            <div className="mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                            <div className="font-medium flex mt-5">
                                <button type="button" className="btn py-1 px-2 border-white text-white dark:border-gray-700 dark:text-gray-300">فعالیت</button>
                                <button type="button" className="btn py-1 px-2 border-transparent text-white dark:text-gray-500 mr-auto">رد کردن</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="intro-y box col-span-12 xxl:col-span-6">
                                <div className="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5">
                                    <h2 className="font-medium text-base ml-auto">
                                    فروش روزانه
                                    </h2>
                                    <div className="dropdown mr-auto sm:hidden">
                                        <a className="dropdown-toggle w-5 h-5 block" href="#" aria-expanded="false"> <i data-feather="more-horizontal" className="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                        <div className="dropdown-menu w-40">
                                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                                <a href="#" className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="file" className="w-4 h-4 ml-2"></i> دانلود فایل اکسل</a>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-outline-secondary hidden sm:flex"> <i data-feather="file" className="w-4 h-4 ml-2"></i> دانلود فایل اکسل</button>
                                </div>
                                <div className="p-5">
                                    <div className="relative flex items-center">
                                        <div className="w-12 h-12 flex-none image-fit">
                                            <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg"/>
                                        </div>
                                        <div className="mr-4 ml-auto">
                                            <a href="" className="font-medium">تام کروز</a> 
                                            <div className="text-gray-600 ml-5 sm:mr-5"l>قالب اچ تی ام ال بوت‌سترپ مدیریتی</div>
                                        </div>
                                        <div className="font-medium text-gray-700 dark:text-gray-500">19+ تومان</div>
                                    </div>
                                    <div className="relative flex items-center mt-5">
                                        <div className="w-12 h-12 flex-none image-fit">
                                            <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg"/>
                                        </div>
                                        <div className="mr-4 ml-auto">
                                            <a href="" className="font-medium">دنزل واشینگتون</a> 
                                            <div className="text-gray-600 ml-5 sm:mr-5"l>قالب مدیریتی اچ تی ام ال</div>
                                        </div>
                                        <div className="font-medium text-gray-700 dark:text-gray-500">25+ تومان</div>
                                    </div>
                                    <div className="relative flex items-center mt-5">
                                        <div className="w-12 h-12 flex-none image-fit">
                                            <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-11.jpg"/>
                                        </div>
                                        <div className="mr-4 ml-auto">
                                            <a href="" className="font-medium">راسل کرو</a> 
                                            <div className="text-gray-600 ml-5 sm:mr-5"l>قالب اچ تی ام ال ویو جی اس</div>
                                        </div>
                                        <div className="font-medium text-gray-700 dark:text-gray-500">21+ تومان</div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y box col-span-12 xxl:col-span-6">
                                <div className="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5">
                                    <h2 className="font-medium text-base ml-auto">
                                        اطلاعیه ها
                                    </h2>
                                    
                                <button data-carousel="announcement" data-target="next" className="tiny-slider-navigator btn btn-outline-secondary px-2"> <i data-feather="chevron-right" className="w-4 h-4"></i> </button>
                                    <button data-carousel="announcement" data-target="prev" className="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"> <i data-feather="chevron-left" className="w-4 h-4"></i> </button>
                                </div>
                                <div className="tiny-slider py-5" id="announcement">
                                    <div className="px-5">
                                        <div className="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div className="text-gray-700 dark:text-gray-600 mt-2">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                                            <br/>
                                            <br/>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                                        </div>
                                        <div className="flex items-center mt-5">
                                            <button className="btn btn-secondary mr-auto">مشاهده جزییات</button>
                                            <div className="px-3 py-2 bg-theme-31 dark:bg-dark-5 dark:text-gray-300 text-theme-26 rounded font-medium">02 دی 1400</div>
                                        
                                        </div>
                                    </div>
                                    <div className="px-5">
                                        <div className="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div className="text-gray-700 dark:text-gray-600 mt-2">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                                            <br/>
                                            <br/>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                                        </div>
                                        <div className="flex items-center mt-5">
                                            <button className="btn btn-secondary mr-auto">مشاهده جزییات</button>
                                            <div className="px-3 py-2 bg-theme-31 dark:bg-dark-5 dark:text-gray-300 text-theme-26 rounded font-medium">02 دی 1400</div>
                                        
                                        </div>
                                    </div>
                                    <div className="px-5">
                                        <div className="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div className="text-gray-700 dark:text-gray-600 mt-2">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                                            <br/>
                                            <br/>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                                        </div>
                                        <div className="flex items-center mt-5">
                                            <button className="btn btn-secondary mr-auto">مشاهده جزییات</button>
                                            <div className="px-3 py-2 bg-theme-31 dark:bg-dark-5 dark:text-gray-300 text-theme-26 rounded font-medium">02 دی 1400</div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y box col-span-12 xxl:col-span-6">
                                <div className="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5">
                                    <h2 className="font-medium text-base ml-auto">
                                        پروژه ها
                                    </h2>
                                    <button data-carousel="projects" data-target="next" className="tiny-slider-navigator btn btn-outline-secondary px-2"> <i data-feather="chevron-right" className="w-4 h-4"></i> </button>
                                    <button data-carousel="projects" data-target="prev" className="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"> <i data-feather="chevron-left" className="w-4 h-4"></i> </button>
                                </div>
                                <div className="tiny-slider py-5" id="projects">
                                    <div className="px-5">
                                        <div className="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div className="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                                        <div className="mt-5">
                                            <div className="flex text-gray-600">
                                                <div className="ml-auto"> تسک در انتظار </div>
                                                <div>20%</div>
                                            </div>
                                            <div className="progress h-1 mt-2">
                                                <div className="progress-bar w-1/2 bg-theme-17" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-5">
                                        <div className="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div className="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                                        <div className="mt-5">
                                            <div className="flex text-gray-600">
                                                <div className="ml-auto"> تسک در انتظار </div>
                                                <div>20%</div>
                                            </div>
                                            <div className="progress h-1 mt-2">
                                                <div className="progress-bar w-1/2 bg-theme-17" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-5">
                                        <div className="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div className="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                                        <div className="mt-5">
                                            <div className="flex text-gray-600">
                                                <div className="ml-auto"> تسک در انتظار </div>
                                                <div>20%</div>
                                            </div>
                                            <div className="progress h-1 mt-2">
                                                <div className="progress-bar w-1/2 bg-theme-17" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y box col-span-12 xxl:col-span-6">
                                <div className="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5">
                                    <h2 className="font-medium text-base ml-auto">
                                    برنامه امروز
                                    </h2>
                                    <button data-carousel="today-schedule" data-target="next" className="tiny-slider-navigator btn btn-outline-secondary px-2"> <i data-feather="chevron-right" className="w-4 h-4"></i> </button>
                                    <button data-carousel="today-schedule" data-target="prev" className="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"> <i data-feather="chevron-left" className="w-4 h-4"></i> </button>
                                </div>
                                <div className="tiny-slider py-5" id="today-schedule">
                                    <div className="px-5 text-center sm:text-right">
                                        <div className="font-medium text-lg">دولوپ با رست ای پی ا لاراول 7</div>
                                        <div className="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </div>
                                        <div className="mt-2">11:15 صبح - 12:30 عصر</div>
                                        <div className="flex flex-col sm:flex-row items-center mt-5">
                                            <div className="flex items-center text-gray-600"> <i data-feather="map-pin" className="hidden sm:block w-4 h-4 ml-2"></i> یک آدرس فرضی در این محل قرار دارد </div>
                                            <button className="btn btn-secondary py-1 px-2 sm:mr-auto mt-3 sm:mt-0sm:mr-auto mt-3 sm:mt-0"> مشاهده بر روی نقشه </button>
                                        </div>
                                    </div>
                                    <div className="px-5 text-center sm:text-right">
                                        <div className="font-medium text-lg">دولوپ با رست ای پی ا لاراول 7</div>
                                        <div className="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </div>
                                        <div className="mt-2">11:15 صبح - 12:30 عصر</div>
                                        <div className="flex flex-col sm:flex-row items-center mt-5">
                                            <div className="flex items-center text-gray-600"> <i data-feather="map-pin" className="hidden sm:block w-4 h-4 ml-2"></i> یک آدرس فرضی در این محل قرار دارد </div>
                                            <button className="btn btn-secondary py-1 px-2 sm:mr-auto mt-3 sm:mt-0sm:mr-auto mt-3 sm:mt-0"> مشاهده بر روی نقشه </button>
                                        </div>
                                    </div>
                                    <div className="px-5 text-center sm:text-right">
                                        <div className="font-medium text-lg">دولوپ با رست ای پی ا لاراول 7</div>
                                        <div className="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </div>
                                        <div className="mt-2">11:15 صبح - 12:30 عصر</div>
                                        <div className="flex flex-col sm:flex-row items-center mt-5">
                                            <div className="flex items-center text-gray-600"> <i data-feather="map-pin" className="hidden sm:block w-4 h-4 ml-2"></i> یک آدرس فرضی در این محل قرار دارد </div>
                                            <button className="btn btn-secondary py-1 px-2 sm:mr-auto mt-3 sm:mt-0sm:mr-auto mt-3 sm:mt-0"> مشاهده بر روی نقشه </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y box col-span-12 xxl:col-span-6">
                                <div className="flex items-center p-5 border-b border-gray-200 dark:border-dark-5">
                                    <h2 className="font-medium text-base ml-auto">
                                    برترین محصولات
                                    </h2>
                                    <div className="dropdown mr-auto">
                                        <a className="dropdown-toggle w-5 h-5 block" href="#" aria-expanded="false"> <i data-feather="more-horizontal" className="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                        <div className="dropdown-menu w-40">
                                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                                <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="edit-2" className="w-4 h-4 ml-2"></i> چت جدید </a>
                                                <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" className="w-4 h-4 ml-2"></i> حذف </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="boxed-tabs nav nav-tabs flex-col justify-center sm:flex-row text-gray-700 dark:text-gray-300" role="tablist">
                                        <a id="top-products-laravel-tab" data-toggle="tab" data-target="#laravel" href="#" className="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2 active" role="tab" aria-selected="true"> <i data-feather="box" className="block w-6 h-6 mb-2 mx-auto"></i> لاراول </a>
                                        <a id="top-products-symfony-tab" data-toggle="tab" data-target="#symfony" href="#" className="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2" role="tab" aria-selected="false"> <i data-feather="inbox" className="block w-6 h-6 mb-2 mx-auto"></i> سیمفونی </a>
                                        <a id="top-products-bootstrap-tab" data-toggle="tab" data-target="#bootstrap" href="#" className="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2" role="tab" aria-selected="false"> <i data-feather="activity" className="block w-6 h-6 mb-2 mx-auto"></i> بوتسرپ </a>
                                    </div>
                                    <div className="tab-content mt-8">
                                        <div id="laravel" className="tab-pane active" role="tabpanel" aria-labelledby="top-products-laravel-tab">
                                            <div className="flex flex-col sm:flex-row items-center">
                                                <div className="ml-auto">
                                                    <a href="" className="font-medium"> قالب وردپرس </a> 
                                                    <div className="text-gray-600 mt-1"> اچ تی ام ال، پی اچ پی، مای اس کیو ال </div>
                                                </div>
                                                <div className="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                                                    <div className="bg-theme-29 text-theme-10 rounded px-2 ml-5">+20%</div>
                                                    <div className="progress h-1 mt-2 sm:w-40">
                                                        <div className="progress-bar w-1/2 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row items-center mt-5">
                                                <div className="ml-auto">
                                                    <a href="" className="font-medium">  قالب لاراول </a> 
                                                    <div className="text-gray-600 mt-1">   پی اچ پی، مای اس کیو ال </div>
                                                </div>
                                                <div className="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                                                    <div className="bg-theme-29 text-theme-10 rounded px-2 ml-5">+55%</div>
                                                    <div className="progress h-1 mt-2 sm:w-40">
                                                        <div className="progress-bar w-2/3 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row items-center mt-5">
                                                <div className="ml-auto">
                                                    <a href="" className="font-medium">قال اچ تی ام ال تویلویند</a> 
                                                    <div className="text-gray-600 mt-1"> اچ تی ام ال ، سی اس اس </div>
                                                </div>
                                                <div className="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                                                    <div className="bg-theme-29 text-theme-10 rounded px-2 ml-5">+40%</div>
                                                    <div className="progress h-1 mt-2 sm:w-40">
                                                        <div className="progress-bar w-3/4 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y box col-span-12 xxl:col-span-6">
                                <div className="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5">
                                    <h2 className="font-medium text-base ml-auto">
                                    کارهای در حال انجام
                                    </h2>
                                    <div className="dropdown mr-auto sm:hidden">
                                        <a className="dropdown-toggle w-5 h-5 block" href="#" aria-expanded="false"> <i data-feather="more-horizontal" className="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                        <div className="nav nav-tabs dropdown-menu w-40" role="tablist">
                                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2"> <a id="work-in-progress-new-tab" href="#" data-toggle="tab" data-target="#work-in-progress-new" className="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md" role="tab" aria-controls="work-in-progress-new" aria-selected="true">جدید</a> <a id="work-in-progress-last-week-tab" href="#" data-toggle="tab" data-target="#work-in-progress-last-week" className="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md" role="tab" aria-selected="false">هفته قبل</a> </div>
                                        </div>
                                    </div>
                                    <div className="nav nav-tabs mr-auto hidden sm:flex" role="tablist"> <a data-toggle="tab" data-target="#work-in-progress-new" href="#" className="py-5 mr-6 active" role="tab" aria-selected="true">جدید</a> <a data-toggle="tab" data-target="#work-in-progress-last-week" href="#" className="py-5 mr-6" role="tab" aria-selected="false">هفته قبل</a> </div>
                                </div>
                                <div className="p-5">
                                    <div className="tab-content">
                                        <div id="work-in-progress-new" className="tab-pane active" role="tabpanel" aria-labelledby="work-in-progress-new-tab">
                                            <div>
                                                <div className="flex">
                                                    <div className="ml-auto"> تسک در انتظار </div>
                                                    <div>20%</div>
                                                </div>
                                                <div className="progress h-1 mt-2">
                                                    <div className="progress-bar w-1/2 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <div className="flex">
                                                    <div className="ml-auto"> تسک کامل شده</div>
                                                    <div>2 / 20</div>
                                                </div>
                                                <div className="progress h-1 mt-2">
                                                    <div className="progress-bar w-1/4 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <div className="flex">
                                                    <div className="ml-auto"> تسک در حال انجام </div>
                                                    <div>42</div>
                                                </div>
                                                <div className="progress h-1 mt-2">
                                                    <div className="progress-bar w-3/4 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <div className="flex">
                                                    <div className="ml-auto"> کارهای در حال بررسی </div>
                                                    <div>70%</div>
                                                </div>
                                                <div className="progress h-1 mt-2">
                                                    <div className="progress-bar w-4/5 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <a href="" className="btn btn-secondary block w-40 mx-auto mt-5">مشاهده جزییات بیشتر</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y box col-span-12 xxl:col-span-6">
                                <div className="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5">
                                    <h2 className="font-medium text-base ml-auto">
                                        آخرین تسک ها
                                    </h2>
                                    <div className="dropdown mr-auto sm:hidden">
                                        <a className="dropdown-toggle w-5 h-5 block" href="#" aria-expanded="false"> <i data-feather="more-horizontal" className="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                        <div className="nav nav-tabs dropdown-menu w-40" role="tablist">
                                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2"> <a id="latest-tasks-new-tab" href="#" data-toggle="tab" data-target="#latest-tasks-new" className="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md" role="tab" aria-controls="latest-tasks-new" aria-selected="true">جدید</a> <a id="latest-tasks-last-week-tab" href="#" data-toggle="tab" data-target="#latest-tasks-last-week" className="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md" role="tab" aria-selected="false">هفته قبل</a> </div>
                                        </div>
                                    </div>
                                    <div className="nav nav-tabs mr-auto hidden sm:flex" role="tablist"> <a id="latest-tasks-mobile-new-tab" data-toggle="tab" data-target="#latest-tasks-new" href="#" className="py-5 mr-6 active" role="tab" aria-selected="true">جدید</a> <a id="latest-tasks-mobile-last-week-tab" data-toggle="tab" data-target="#latest-tasks-last-week" href="#" className="py-5 mr-6" role="tab" aria-selected="false">هفته قبل</a> </div>
                                </div>
                                <div className="p-5">
                                    <div className="tab-content">
                                        <div id="latest-tasks-new" className="tab-pane active" role="tabpanel" aria-labelledby="latest-tasks-new-tab">
                                            <div className="flex items-center">
                                                <div className="border-l-2 border-theme-17 pr-4">
                                                    <a href="" className="font-medium">ساخت کمپین جدید</a> 
                                                    <div className="text-gray-600">10:00 صبح</div>
                                                </div>
                                                <input className="form-check-switch mr-auto" type="checkbox" checked/>
                                            </div>
                                            <div className="flex items-center mt-5">
                                                <div className="border-l-2 border-theme-17 pr-4">
                                                    <a href="" className="font-medium">دیدن مشتریان</a> 
                                                    <div className="text-gray-600">02:00 عصر</div>
                                                </div>
                                                <input className="form-check-switch mr-auto" type="checkbox"/>
                                            </div>
                                            <div className="flex items-center mt-5">
                                                <div className="border-l-2 border-theme-17 pr-4">
                                                    <a href="" className="font-medium">ساخت ریپازیتوری جدید</a> 
                                                    <div className="text-gray-600">04:00 عصر</div>
                                                </div>
                                                <input className="form-check-switch mr-auto" type="checkbox"/>
                                            </div>
                                            <div className="flex items-center mt-5">
                                                <div className="border-l-2 border-theme-17 pr-4">
                                                    <a href="" className="font-medium">دیدن مشتریان</a> 
                                                    <div className="text-gray-600">10:00 صبح</div>
                                                </div>
                                                <input className="form-check-switch mr-auto" type="checkbox" checked/>
                                            </div>
                                            <div className="flex items-center mt-5">
                                                <div className="border-l-2 border-theme-17 pr-4">
                                                    <a href="" className="font-medium">ساخت ریپازیتوری جدید</a> 
                                                    <div className="text-gray-600">11:00 عصر</div>
                                                </div>
                                                <input className="form-check-switch mr-auto" type="checkbox"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y box col-span-12 xxl:col-span-6">
                                <div className="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5">
                                    <h2 className="font-medium text-base ml-auto">
                                        آمار کلی
                                    </h2>
                                    <div className="dropdown mr-auto">
                                        <a className="dropdown-toggle w-5 h-5 block sm:hidden" href="#" aria-expanded="false"> <i data-feather="more-horizontal" className="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                        <button className="dropdown-toggle btn btn-outline-secondary font-normal hidden sm:flex" aria-expanded="false"> خروجی <i data-feather="chevron-down" className="w-4 h-4 ml-2"></i> </button>
                                        <div className="dropdown-menu w-40">
                                            <div className="dropdown-menu__content box dark:bg-dark-1">
                                                <div className="px-4 py-2 border-b border-gray-200 dark:border-dark-5 font-medium">ابزارهای خروجی</div>
                                                <div className="p-2">
                                                    <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="printer" className="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i>پرینت</a>
                                                    <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="external-link" className="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i>اکسل</a>
                                                    <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="file-text" className="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i>سی وس اس</a>
                                                    <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="archive" className="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i> پی دی اف </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex flex-col sm:flex-row items-center">
                                        <div className="flex flex-wrap sm:flex-nowrap ml-auto">
                                            <div className="flex items-center ml-5 mb-1 sm:mb-0">
                                                <div className="w-2 h-2 bg-theme-22 rounded-full ml-3"></div>
                                                <span>فروش کاربر</span> 
                                            </div>
                                            <div className="flex items-center ml-5 mb-1 sm:mb-0">
                                                <div className="w-2 h-2 bg-theme-26 rounded-full ml-3"></div>
                                                <span>سود محصول </span> 
                                            </div>
                                        </div>
                                        <div className="dropdown mt-3 sm:mt-0 mr-auto sm:mr-0">
                                            <button className="dropdown-toggle btn btn-outline-secondary font-normal" aria-expanded="false"> فیلتر بر اساس ماه <i data-feather="chevron-down" className="w-4 h-4 ml-2"></i> </button>
                                            <div className="dropdown-menu w-40">
                                                <div className="dropdown-menu__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">تیر</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">مرداد</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">شهریور</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">مهر</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">آبان</a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="report-chart mt-8">
                                        <canvas id="report-line-chart" height="130"></canvas>
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