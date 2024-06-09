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
            <div class="content">
                <div class="intro-y flex items-center mt-8">
                    <h2 class="text-lg font-medium ml-auto">
                    چینش پروفایل
                    </h2>
                </div>
                <div class="grid grid-cols-12 gap-6 mt-5">
                    <div class="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
                        <div class="intro-y box mt-5 lg:mt-0">
                            <div class="relative flex items-center p-5">
                                <div class="w-12 h-12 image-fit">
                                    <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="dist/images/profile-2.jpg"/>
                                </div>
                                <div class="mr-4 ml-auto">
                                    <div class="font-medium text-base">تام کروز</div>
                                    <div class="text-gray-600">مهندس نرم افزار</div>
                                </div>
                                <div class="dropdown">
                                    <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false"> <i data-feather="more-horizontal" class="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                    <div class="dropdown-menu w-56">
                                        <div class="dropdown-menu__content box dark:bg-dark-1">
                                            <div class="p-4 border-b border-gray-200 dark:border-dark-5 font-medium">گزینه های خروجی</div>
                                            <div class="p-2">
                                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="activity" class="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i> انگلیسی </a>
                                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                                                    <i data-feather="box" class="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i> اندولوزی
                                                    <div class="text-xs text-white px-1 rounded-full bg-theme-24 mr-auto">10</div>
                                                </a>
                                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="layout" class="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i> انگلیسی </a>
                                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="sidebar" class="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i> اندولوزی</a>
                                            </div>
                                            <div class="px-3 py-3 border-t border-gray-200 dark:border-dark-5 font-medium flex">
                                                <button type="button" class="btn btn-primary py-1 px-2">تنظیمات</button>
                                                <button type="button" class="btn btn-secondary py-1 px-2 mr-auto">مشاهده پروفایل</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-5 border-t border-gray-200 dark:border-dark-5">
                                <a class="flex items-center text-theme-17 dark:text-white font-medium" href=""> <i data-feather="activity" class="w-4 h-4 ml-2"></i> اطلاعات شخصی </a>
                                <a class="flex items-center mt-5" href=""> <i data-feather="box" class="w-4 h-4 ml-2"></i> تنظیمات اکانت </a>
                                <a class="flex items-center mt-5" href=""> <i data-feather="lock" class="w-4 h-4 ml-2"></i> تغییر رمزعبور </a>
                                <a class="flex items-center mt-5" href=""> <i data-feather="settings" class="w-4 h-4 ml-2"></i> تنظیمات کاربر </a>
                            </div>
                            <div class="p-5 border-t border-gray-200 dark:border-dark-5">
                                <a class="flex items-center" href=""> <i data-feather="activity" class="w-4 h-4 ml-2"></i> تنظیمات ایمیل </a>
                                <a class="flex items-center mt-5" href=""> <i data-feather="box" class="w-4 h-4 ml-2"></i> ذخیره کارت اعتباری </a>
                                <a class="flex items-center mt-5" href=""> <i data-feather="lock" class="w-4 h-4 ml-2"></i> شبکه های اجتماعی </a>
                                <a class="flex items-center mt-5" href=""> <i data-feather="settings" class="w-4 h-4 ml-2"></i> اطلاعات مالیاتی </a>
                            </div>
                            <div class="p-5 border-t border-gray-200 dark:border-dark-5 flex">
                                <button type="button" class="btn btn-primary py-1 px-2">گروه جدید </button>
                                <button type="button" class="btn btn-outline-secondary py-1 px-2 mr-auto">لینک سریع جدید </button>
                            </div>
                        </div>
                        <div class="intro-y box p-5 bg-theme-17 text-white mt-5">
                            <div class="flex items-center">
                                <div class="font-medium text-lg">به روز رسانی مهم</div>
                                <div class="text-xs bg-white dark:bg-theme-17 dark:text-white text-gray-800 px-1 rounded-md mr-auto">جدید</div>
                            </div>
                            <div class="mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                            <div class="font-medium flex mt-5">
                                <button type="button" class="btn py-1 px-2 border-white text-white dark:border-gray-700 dark:text-gray-300">فعالیت</button>
                                <button type="button" class="btn py-1 px-2 border-transparent text-white dark:text-gray-500 mr-auto">رد کردن</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 xxl:col-span-9">
                        <div class="grid grid-cols-12 gap-6">
                            <div class="intro-y box col-span-12 xxl:col-span-6">
                                <div class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5">
                                    <h2 class="font-medium text-base ml-auto">
                                    فروش روزانه
                                    </h2>
                                    <div class="dropdown mr-auto sm:hidden">
                                        <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false"> <i data-feather="more-horizontal" class="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                        <div class="dropdown-menu w-40">
                                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                                                <a href="javascript:;" class="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="file" class="w-4 h-4 ml-2"></i> دانلود فایل اکسل</a>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="btn btn-outline-secondary hidden sm:flex"> <i data-feather="file" class="w-4 h-4 ml-2"></i> دانلود فایل اکسل</button>
                                </div>
                                <div class="p-5">
                                    <div class="relative flex items-center">
                                        <div class="w-12 h-12 flex-none image-fit">
                                            <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="dist/images/profile-2.jpg"/>
                                        </div>
                                        <div class="mr-4 ml-auto">
                                            <a href="" class="font-medium">تام کروز</a> 
                                            <div class="text-gray-600 ml-5 sm:mr-5"l>قالب اچ تی ام ال بوت‌سترپ مدیریتی</div>
                                        </div>
                                        <div class="font-medium text-gray-700 dark:text-gray-500">19+ تومان</div>
                                    </div>
                                    <div class="relative flex items-center mt-5">
                                        <div class="w-12 h-12 flex-none image-fit">
                                            <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="dist/images/profile-2.jpg"/>
                                        </div>
                                        <div class="mr-4 ml-auto">
                                            <a href="" class="font-medium">دنزل واشینگتون</a> 
                                            <div class="text-gray-600 ml-5 sm:mr-5"l>قالب مدیریتی اچ تی ام ال</div>
                                        </div>
                                        <div class="font-medium text-gray-700 dark:text-gray-500">25+ تومان</div>
                                    </div>
                                    <div class="relative flex items-center mt-5">
                                        <div class="w-12 h-12 flex-none image-fit">
                                            <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="dist/images/profile-11.jpg"/>
                                        </div>
                                        <div class="mr-4 ml-auto">
                                            <a href="" class="font-medium">راسل کرو</a> 
                                            <div class="text-gray-600 ml-5 sm:mr-5"l>قالب اچ تی ام ال ویو جی اس</div>
                                        </div>
                                        <div class="font-medium text-gray-700 dark:text-gray-500">21+ تومان</div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y box col-span-12 xxl:col-span-6">
                                <div class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5">
                                    <h2 class="font-medium text-base ml-auto">
                                        اطلاعیه ها
                                    </h2>
                                    
                                <button data-carousel="announcement" data-target="next" class="tiny-slider-navigator btn btn-outline-secondary px-2"> <i data-feather="chevron-right" class="w-4 h-4"></i> </button>
                                    <button data-carousel="announcement" data-target="prev" class="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"> <i data-feather="chevron-left" class="w-4 h-4"></i> </button>
                                </div>
                                <div class="tiny-slider py-5" id="announcement">
                                    <div class="px-5">
                                        <div class="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div class="text-gray-700 dark:text-gray-600 mt-2">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                                            <br/>
                                            <br/>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                                        </div>
                                        <div class="flex items-center mt-5">
                                            <button class="btn btn-secondary mr-auto">مشاهده جزییات</button>
                                            <div class="px-3 py-2 bg-theme-31 dark:bg-dark-5 dark:text-gray-300 text-theme-26 rounded font-medium">02 دی 1400</div>
                                        
                                        </div>
                                    </div>
                                    <div class="px-5">
                                        <div class="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div class="text-gray-700 dark:text-gray-600 mt-2">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                                            <br/>
                                            <br/>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                                        </div>
                                        <div class="flex items-center mt-5">
                                            <button class="btn btn-secondary mr-auto">مشاهده جزییات</button>
                                            <div class="px-3 py-2 bg-theme-31 dark:bg-dark-5 dark:text-gray-300 text-theme-26 rounded font-medium">02 دی 1400</div>
                                        
                                        </div>
                                    </div>
                                    <div class="px-5">
                                        <div class="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div class="text-gray-700 dark:text-gray-600 mt-2">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                                            <br/>
                                            <br/>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                                        </div>
                                        <div class="flex items-center mt-5">
                                            <button class="btn btn-secondary mr-auto">مشاهده جزییات</button>
                                            <div class="px-3 py-2 bg-theme-31 dark:bg-dark-5 dark:text-gray-300 text-theme-26 rounded font-medium">02 دی 1400</div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y box col-span-12 xxl:col-span-6">
                                <div class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5">
                                    <h2 class="font-medium text-base ml-auto">
                                        پروژه ها
                                    </h2>
                                    <button data-carousel="projects" data-target="next" class="tiny-slider-navigator btn btn-outline-secondary px-2"> <i data-feather="chevron-right" class="w-4 h-4"></i> </button>
                                    <button data-carousel="projects" data-target="prev" class="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"> <i data-feather="chevron-left" class="w-4 h-4"></i> </button>
                                </div>
                                <div class="tiny-slider py-5" id="projects">
                                    <div class="px-5">
                                        <div class="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div class="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                                        <div class="mt-5">
                                            <div class="flex text-gray-600">
                                                <div class="ml-auto"> تسک در انتظار </div>
                                                <div>20%</div>
                                            </div>
                                            <div class="progress h-1 mt-2">
                                                <div class="progress-bar w-1/2 bg-theme-17" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-5">
                                        <div class="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div class="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                                        <div class="mt-5">
                                            <div class="flex text-gray-600">
                                                <div class="ml-auto"> تسک در انتظار </div>
                                                <div>20%</div>
                                            </div>
                                            <div class="progress h-1 mt-2">
                                                <div class="progress-bar w-1/2 bg-theme-17" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-5">
                                        <div class="font-medium text-lg">داشبرد ادمین ایس وال</div>
                                        <div class="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                                        <div class="mt-5">
                                            <div class="flex text-gray-600">
                                                <div class="ml-auto"> تسک در انتظار </div>
                                                <div>20%</div>
                                            </div>
                                            <div class="progress h-1 mt-2">
                                                <div class="progress-bar w-1/2 bg-theme-17" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y box col-span-12 xxl:col-span-6">
                                <div class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5">
                                    <h2 class="font-medium text-base ml-auto">
                                    برنامه امروز
                                    </h2>
                                    <button data-carousel="today-schedule" data-target="next" class="tiny-slider-navigator btn btn-outline-secondary px-2"> <i data-feather="chevron-right" class="w-4 h-4"></i> </button>
                                    <button data-carousel="today-schedule" data-target="prev" class="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"> <i data-feather="chevron-left" class="w-4 h-4"></i> </button>
                                </div>
                                <div class="tiny-slider py-5" id="today-schedule">
                                    <div class="px-5 text-center sm:text-right">
                                        <div class="font-medium text-lg">دولوپ با رست ای پی ا لاراول 7</div>
                                        <div class="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </div>
                                        <div class="mt-2">11:15 صبح - 12:30 عصر</div>
                                        <div class="flex flex-col sm:flex-row items-center mt-5">
                                            <div class="flex items-center text-gray-600"> <i data-feather="map-pin" class="hidden sm:block w-4 h-4 ml-2"></i> یک آدرس فرضی در این محل قرار دارد </div>
                                            <button class="btn btn-secondary py-1 px-2 sm:mr-auto mt-3 sm:mt-0sm:mr-auto mt-3 sm:mt-0"> مشاهده بر روی نقشه </button>
                                        </div>
                                    </div>
                                    <div class="px-5 text-center sm:text-right">
                                        <div class="font-medium text-lg">دولوپ با رست ای پی ا لاراول 7</div>
                                        <div class="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </div>
                                        <div class="mt-2">11:15 صبح - 12:30 عصر</div>
                                        <div class="flex flex-col sm:flex-row items-center mt-5">
                                            <div class="flex items-center text-gray-600"> <i data-feather="map-pin" class="hidden sm:block w-4 h-4 ml-2"></i> یک آدرس فرضی در این محل قرار دارد </div>
                                            <button class="btn btn-secondary py-1 px-2 sm:mr-auto mt-3 sm:mt-0sm:mr-auto mt-3 sm:mt-0"> مشاهده بر روی نقشه </button>
                                        </div>
                                    </div>
                                    <div class="px-5 text-center sm:text-right">
                                        <div class="font-medium text-lg">دولوپ با رست ای پی ا لاراول 7</div>
                                        <div class="text-gray-700 dark:text-gray-600 mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </div>
                                        <div class="mt-2">11:15 صبح - 12:30 عصر</div>
                                        <div class="flex flex-col sm:flex-row items-center mt-5">
                                            <div class="flex items-center text-gray-600"> <i data-feather="map-pin" class="hidden sm:block w-4 h-4 ml-2"></i> یک آدرس فرضی در این محل قرار دارد </div>
                                            <button class="btn btn-secondary py-1 px-2 sm:mr-auto mt-3 sm:mt-0sm:mr-auto mt-3 sm:mt-0"> مشاهده بر روی نقشه </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y box col-span-12 xxl:col-span-6">
                                <div class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5">
                                    <h2 class="font-medium text-base ml-auto">
                                    برترین محصولات
                                    </h2>
                                    <div class="dropdown mr-auto">
                                        <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false"> <i data-feather="more-horizontal" class="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                        <div class="dropdown-menu w-40">
                                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="edit-2" class="w-4 h-4 ml-2"></i> چت جدید </a>
                                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" class="w-4 h-4 ml-2"></i> حذف </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5">
                                    <div class="boxed-tabs nav nav-tabs flex-col justify-center sm:flex-row text-gray-700 dark:text-gray-300" role="tablist">
                                        <a id="top-products-laravel-tab" data-toggle="tab" data-target="#laravel" href="javascript:;" class="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2 active" role="tab" aria-selected="true"> <i data-feather="box" class="block w-6 h-6 mb-2 mx-auto"></i> لاراول </a>
                                        <a id="top-products-symfony-tab" data-toggle="tab" data-target="#symfony" href="javascript:;" class="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2" role="tab" aria-selected="false"> <i data-feather="inbox" class="block w-6 h-6 mb-2 mx-auto"></i> سیمفونی </a>
                                        <a id="top-products-bootstrap-tab" data-toggle="tab" data-target="#bootstrap" href="javascript:;" class="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2" role="tab" aria-selected="false"> <i data-feather="activity" class="block w-6 h-6 mb-2 mx-auto"></i> بوتسرپ </a>
                                    </div>
                                    <div class="tab-content mt-8">
                                        <div id="laravel" class="tab-pane active" role="tabpanel" aria-labelledby="top-products-laravel-tab">
                                            <div class="flex flex-col sm:flex-row items-center">
                                                <div class="ml-auto">
                                                    <a href="" class="font-medium"> قالب وردپرس </a> 
                                                    <div class="text-gray-600 mt-1"> اچ تی ام ال، پی اچ پی، مای اس کیو ال </div>
                                                </div>
                                                <div class="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                                                    <div class="bg-theme-29 text-theme-10 rounded px-2 ml-5">+20%</div>
                                                    <div class="progress h-1 mt-2 sm:w-40">
                                                        <div class="progress-bar w-1/2 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col sm:flex-row items-center mt-5">
                                                <div class="ml-auto">
                                                    <a href="" class="font-medium">  قالب لاراول </a> 
                                                    <div class="text-gray-600 mt-1">   پی اچ پی، مای اس کیو ال </div>
                                                </div>
                                                <div class="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                                                    <div class="bg-theme-29 text-theme-10 rounded px-2 ml-5">+55%</div>
                                                    <div class="progress h-1 mt-2 sm:w-40">
                                                        <div class="progress-bar w-2/3 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col sm:flex-row items-center mt-5">
                                                <div class="ml-auto">
                                                    <a href="" class="font-medium">قال اچ تی ام ال تویلویند</a> 
                                                    <div class="text-gray-600 mt-1"> اچ تی ام ال ، سی اس اس </div>
                                                </div>
                                                <div class="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                                                    <div class="bg-theme-29 text-theme-10 rounded px-2 ml-5">+40%</div>
                                                    <div class="progress h-1 mt-2 sm:w-40">
                                                        <div class="progress-bar w-3/4 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y box col-span-12 xxl:col-span-6">
                                <div class="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5">
                                    <h2 class="font-medium text-base ml-auto">
                                    کارهای در حال انجام
                                    </h2>
                                    <div class="dropdown mr-auto sm:hidden">
                                        <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false"> <i data-feather="more-horizontal" class="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                        <div class="nav nav-tabs dropdown-menu w-40" role="tablist">
                                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2"> <a id="work-in-progress-new-tab" href="javascript:;" data-toggle="tab" data-target="#work-in-progress-new" class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md" role="tab" aria-controls="work-in-progress-new" aria-selected="true">جدید</a> <a id="work-in-progress-last-week-tab" href="javascript:;" data-toggle="tab" data-target="#work-in-progress-last-week" class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md" role="tab" aria-selected="false">هفته قبل</a> </div>
                                        </div>
                                    </div>
                                    <div class="nav nav-tabs mr-auto hidden sm:flex" role="tablist"> <a data-toggle="tab" data-target="#work-in-progress-new" href="javascript:;" class="py-5 mr-6 active" role="tab" aria-selected="true">جدید</a> <a data-toggle="tab" data-target="#work-in-progress-last-week" href="javascript:;" class="py-5 mr-6" role="tab" aria-selected="false">هفته قبل</a> </div>
                                </div>
                                <div class="p-5">
                                    <div class="tab-content">
                                        <div id="work-in-progress-new" class="tab-pane active" role="tabpanel" aria-labelledby="work-in-progress-new-tab">
                                            <div>
                                                <div class="flex">
                                                    <div class="ml-auto"> تسک در انتظار </div>
                                                    <div>20%</div>
                                                </div>
                                                <div class="progress h-1 mt-2">
                                                    <div class="progress-bar w-1/2 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="mt-5">
                                                <div class="flex">
                                                    <div class="ml-auto"> تسک کامل شده</div>
                                                    <div>2 / 20</div>
                                                </div>
                                                <div class="progress h-1 mt-2">
                                                    <div class="progress-bar w-1/4 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="mt-5">
                                                <div class="flex">
                                                    <div class="ml-auto"> تسک در حال انجام </div>
                                                    <div>42</div>
                                                </div>
                                                <div class="progress h-1 mt-2">
                                                    <div class="progress-bar w-3/4 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="mt-5">
                                                <div class="flex">
                                                    <div class="ml-auto"> کارهای در حال بررسی </div>
                                                    <div>70%</div>
                                                </div>
                                                <div class="progress h-1 mt-2">
                                                    <div class="progress-bar w-4/5 bg-theme-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <a href="" class="btn btn-secondary block w-40 mx-auto mt-5">مشاهده جزییات بیشتر</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y box col-span-12 xxl:col-span-6">
                                <div class="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5">
                                    <h2 class="font-medium text-base ml-auto">
                                        آخرین تسک ها
                                    </h2>
                                    <div class="dropdown mr-auto sm:hidden">
                                        <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false"> <i data-feather="more-horizontal" class="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                        <div class="nav nav-tabs dropdown-menu w-40" role="tablist">
                                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2"> <a id="latest-tasks-new-tab" href="javascript:;" data-toggle="tab" data-target="#latest-tasks-new" class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md" role="tab" aria-controls="latest-tasks-new" aria-selected="true">جدید</a> <a id="latest-tasks-last-week-tab" href="javascript:;" data-toggle="tab" data-target="#latest-tasks-last-week" class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md" role="tab" aria-selected="false">هفته قبل</a> </div>
                                        </div>
                                    </div>
                                    <div class="nav nav-tabs mr-auto hidden sm:flex" role="tablist"> <a id="latest-tasks-mobile-new-tab" data-toggle="tab" data-target="#latest-tasks-new" href="javascript:;" class="py-5 mr-6 active" role="tab" aria-selected="true">جدید</a> <a id="latest-tasks-mobile-last-week-tab" data-toggle="tab" data-target="#latest-tasks-last-week" href="javascript:;" class="py-5 mr-6" role="tab" aria-selected="false">هفته قبل</a> </div>
                                </div>
                                <div class="p-5">
                                    <div class="tab-content">
                                        <div id="latest-tasks-new" class="tab-pane active" role="tabpanel" aria-labelledby="latest-tasks-new-tab">
                                            <div class="flex items-center">
                                                <div class="border-l-2 border-theme-17 pr-4">
                                                    <a href="" class="font-medium">ساخت کمپین جدید</a> 
                                                    <div class="text-gray-600">10:00 صبح</div>
                                                </div>
                                                <input class="form-check-switch mr-auto" type="checkbox" checked/>
                                            </div>
                                            <div class="flex items-center mt-5">
                                                <div class="border-l-2 border-theme-17 pr-4">
                                                    <a href="" class="font-medium">دیدن مشتریان</a> 
                                                    <div class="text-gray-600">02:00 عصر</div>
                                                </div>
                                                <input class="form-check-switch mr-auto" type="checkbox"/>
                                            </div>
                                            <div class="flex items-center mt-5">
                                                <div class="border-l-2 border-theme-17 pr-4">
                                                    <a href="" class="font-medium">ساخت ریپازیتوری جدید</a> 
                                                    <div class="text-gray-600">04:00 عصر</div>
                                                </div>
                                                <input class="form-check-switch mr-auto" type="checkbox"/>
                                            </div>
                                            <div class="flex items-center mt-5">
                                                <div class="border-l-2 border-theme-17 pr-4">
                                                    <a href="" class="font-medium">دیدن مشتریان</a> 
                                                    <div class="text-gray-600">10:00 صبح</div>
                                                </div>
                                                <input class="form-check-switch mr-auto" type="checkbox" checked/>
                                            </div>
                                            <div class="flex items-center mt-5">
                                                <div class="border-l-2 border-theme-17 pr-4">
                                                    <a href="" class="font-medium">ساخت ریپازیتوری جدید</a> 
                                                    <div class="text-gray-600">11:00 عصر</div>
                                                </div>
                                                <input class="form-check-switch mr-auto" type="checkbox"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y box col-span-12 xxl:col-span-6">
                                <div class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5">
                                    <h2 class="font-medium text-base ml-auto">
                                        آمار کلی
                                    </h2>
                                    <div class="dropdown mr-auto">
                                        <a class="dropdown-toggle w-5 h-5 block sm:hidden" href="javascript:;" aria-expanded="false"> <i data-feather="more-horizontal" class="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                        <button class="dropdown-toggle btn btn-outline-secondary font-normal hidden sm:flex" aria-expanded="false"> خروجی <i data-feather="chevron-down" class="w-4 h-4 ml-2"></i> </button>
                                        <div class="dropdown-menu w-40">
                                            <div class="dropdown-menu__content box dark:bg-dark-1">
                                                <div class="px-4 py-2 border-b border-gray-200 dark:border-dark-5 font-medium">ابزارهای خروجی</div>
                                                <div class="p-2">
                                                    <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="printer" class="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i>پرینت</a>
                                                    <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="external-link" class="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i>اکسل</a>
                                                    <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="file-text" class="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i>سی وس اس</a>
                                                    <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="archive" class="w-4 h-4 text-gray-700 dark:text-gray-300 ml-2"></i> پی دی اف </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5">
                                    <div class="flex flex-col sm:flex-row items-center">
                                        <div class="flex flex-wrap sm:flex-nowrap ml-auto">
                                            <div class="flex items-center ml-5 mb-1 sm:mb-0">
                                                <div class="w-2 h-2 bg-theme-22 rounded-full ml-3"></div>
                                                <span>فروش کاربر</span> 
                                            </div>
                                            <div class="flex items-center ml-5 mb-1 sm:mb-0">
                                                <div class="w-2 h-2 bg-theme-26 rounded-full ml-3"></div>
                                                <span>سود محصول </span> 
                                            </div>
                                        </div>
                                        <div class="dropdown mt-3 sm:mt-0 mr-auto sm:mr-0">
                                            <button class="dropdown-toggle btn btn-outline-secondary font-normal" aria-expanded="false"> فیلتر بر اساس ماه <i data-feather="chevron-down" class="w-4 h-4 ml-2"></i> </button>
                                            <div class="dropdown-menu w-40">
                                                <div class="dropdown-menu__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"> <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">تیر</a> <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">مرداد</a> <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">شهریور</a> <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">مهر</a> <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">آبان</a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="report-chart mt-8">
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