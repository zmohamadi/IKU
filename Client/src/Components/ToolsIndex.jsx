"use client";

import { useLang } from "@/lib/lang";
import Link from "next/link";
import { Frame } from "@/Theme/Midone/Base/Frame";

export function ToolsIndex({nextPath,laraDomain, access ,id}){
    const { Lang } = useLang();
    const url = nextPath + "/lessons/" + id + "/tools/";
    return (
        <>
            <Frame title="Tools">
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 xxl:col-span-2">
                    <div className="file box rounded-md px-5 pt-8 pb-5 sm:px-5 relative zoom-in">
                        <Link href={url + "meeting"} className="w-3/5 file__icon file__icon--image mx-auto">
                            <div className="file__icon--image__preview image-fit">
                                <img alt="meeting" src={laraDomain + "/admin/img/tools/meeting.png"} />
                            </div>
                        </Link>
                        <Link href={url + "meeting"} className="block font-medium mt-4 text-center truncate">
                            {Lang("public.meetings")}
                        </Link>
                    </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 xxl:col-span-2">
                    <div className="file box rounded-md px-5 pt-8 pb-5 sm:px-5 relative zoom-in">
                        <Link href={url + "content"} className="w-3/5 file__icon file__icon--image mx-auto">
                            <div className="file__icon--image__preview image-fit">
                                <img alt="Contents" src={laraDomain + "/admin/img/tools/contents.png"} />
                            </div>
                        </Link>
                        <Link href={url + "content"} className="block font-medium mt-4 text-center truncate">
                            {Lang("public.contents")}
                        </Link>
                    </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 xxl:col-span-2">
                    <div className="file box rounded-md px-5 pt-8 pb-5 sm:px-5 relative zoom-in">
                        <Link href={url + "homework"} className="w-3/5 file__icon file__icon--image mx-auto">
                            <div className="file__icon--image__preview image-fit">
                                <img alt="homework" src={laraDomain + "/admin/img/tools/homework.png"} />
                            </div>
                        </Link>
                        <Link href={url + "homework"} className="block font-medium mt-4 text-center truncate">
                            {Lang("public.homework")}
                        </Link>
                    </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 xxl:col-span-2">
                    <div className="file box rounded-md px-5 pt-8 pb-5 sm:px-5 relative zoom-in">
                        <Link href={url + "quiz"} className="w-3/5 file__icon file__icon--image mx-auto">
                            <div className="file__icon--image__preview image-fit">
                                <img alt="Quiz" src={laraDomain + "/admin/img/tools/quiz.png"} />
                            </div>
                        </Link>
                        <Link href={url + "quiz"} className="block font-medium mt-4 text-center truncate">
                            {Lang("public.quiz")}
                        </Link>
                    </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 xxl:col-span-2">
                    <div className="file box rounded-md px-5 pt-8 pb-5 sm:px-5 relative zoom-in">
                        <Link href={url + "survey"}>
                            <span className="w-3/5 file__icon file__icon--image mx-auto">
                                <div className="file__icon--image__preview image-fit">
                                    <img alt="Survey" src={laraDomain + "/admin/img/tools/survey.png"} />
                                </div>
                            </span>
                            <span href={url + "survey"} className="block font-medium mt-4 text-center truncate">
                                {Lang("public.survey")}
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 xxl:col-span-2">
                    <div className="file box rounded-md px-5 pt-8 pb-5 sm:px-5 relative zoom-in">
                        <Link href={url+"forum"} className="w-3/5 file__icon file__icon--image mx-auto">
                            <div className="file__icon--image__preview image-fit">
                                <img alt="Resource" src={laraDomain + "/admin/img/tools/forum.png"} />
                            </div>
                        </Link>
                        <Link href={url+"forum"} className="block font-medium mt-4 text-center truncate">
                            {Lang("public.forum")}
                        </Link>
                    </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 xxl:col-span-2">
                    <div className="file box rounded-md px-5 pt-8 pb-5 sm:px-5 relative zoom-in">
                        <Link href={url + "notification"} className="w-3/5 file__icon file__icon--image mx-auto">
                            <div className="file__icon--image__preview image-fit">
                                <img alt="Notification" src={laraDomain + "/admin/img/tools/notification.png"} />
                            </div>
                        </Link>
                        <Link href={url + "notification"} className="block font-medium mt-4 text-center truncate">
                            {Lang("public.notification")}
                        </Link>
                    </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 xxl:col-span-2">
                    <div className="file box rounded-md px-5 pt-8 pb-5 sm:px-5 relative zoom-in">
                        <Link href={url + "resource"} className="w-3/5 file__icon file__icon--image mx-auto">
                            <div className="file__icon--image__preview image-fit">
                                <img alt="Resource" src={laraDomain + "/admin/img/tools/resource.png"} />
                            </div>
                        </Link>
                        <Link href={url + "resource"} className="block font-medium mt-4 text-center truncate">
                            {Lang("public.resource")}
                        </Link>
                    </div>
                </div>
            </Frame>
        </>
    );
}