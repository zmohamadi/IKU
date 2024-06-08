"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData, useFormRefs,Box, ButtonContainer, Button } from "@/Theme/Midone/Forms";
import { useRouter } from "next/navigation";
import { Tools } from "@/Theme/Midone";

export function ReportCard({id,lesson,laraPath}){
    const router = useRouter();
    const back = ()=>router.back();
    const {Lang,local} = useLang();
    const {mediaPath} = useConfig();
    const formUrl = "/lessons/report-card/"+lesson+"/"+id ;
    let component = useFormRefs();
    let {get} = useData();
    let url = laraPath+formUrl;

    useEffect(() => {
        get(url, component, "info");
    }, []);
   
    console.log(component?.state?.info);

    let stu = component?.state?.info?.student;
    let attemps = component?.state?.info?.student?.attemps;
    let homework_answers = component?.state?.info?.student?.homework_answers;
    let lessonInfo = component?.state?.info?.lesson;
    let enroll = component?.state?.info?.enroll;

    return <>
        <Box title={Lang(["public.report_card"])}>
                <div class="col-span-12">
                        <div class="flex justify-center">
                                <img src={mediaPath+"/users/"+stu?.pic} alt="Student Image" class="w-32 h-32 rounded-full" />
                        </div>
                        <div class="mt-2">
                                <h2 class="text-xl font-semibold text-gray-800">Student Information</h2>
                                <p class="mt-2 text-gray-700"><span class="font-semibold">Student Name:</span> {stu?.name} {stu?.lname}</p>
                                <p class="mt-2 text-gray-700"><span class="font-semibold">Email:</span> {stu?.email}</p>
                        </div>
                        <div class="mt-2">
                                <h2 class="text-xl font-semibold text-gray-800">Lesson Information</h2>
                                <p class="mt-2 text-gray-700"><span class="font-semibold">Lesson Title:</span> {lessonInfo?.title}</p>
                        </div>
                        <div class="mt-2">
                                <h2 class="text-xl font-semibold text-gray-800">Grades</h2>
                                <table class="mt-2 w-full">
                                        <thead>
                                        <tr>
                                                <th class="px-4 py-2 text-left">Item</th>
                                                <th class="px-4 py-2 text-left">Date</th>
                                                <th class="px-4 py-2 text-left">Grade</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                                Tools.getArray(attemps).map((attemp)=>{
                                                        return<>
                                                                <tr>
                                                                        <td class="border px-4 py-2">{attemp?.quiz?.title}</td>
                                                                        <td class="border px-4 py-2">{attemp?.quiz?.start_time_date}</td>
                                                                        <td class="border px-4 py-2">{attemp?.total_score}</td>
                                                                </tr>
                                                        </>

                                                })
                                        }
                                        {
                                                Tools.getArray(homework_answers).map((answers)=>{
                                                        return<>
                                                                <tr>
                                                                        <td class="border px-4 py-2">{answers?.homework?.title}</td>
                                                                        <td class="border px-4 py-2">{answers?.homework?.start_date}</td>
                                                                        <td class="border px-4 py-2">{answers?.score}</td>
                                                                </tr>
                                                        </>

                                                })
                                        }
                                        {/* <tr>
                                                <td class="border px-4 py-2">Exam 2</td>
                                                <td class="border px-4 py-2">2023-04-03 10:11</td>
                                                <td class="border px-4 py-2">20</td>
                                        </tr>
                                        <tr>
                                                <td class="border px-4 py-2">Exam 3</td>
                                                <td class="border px-4 py-2">2023-04-03 10:11</td>
                                                <td class="border px-4 py-2">12</td>
                                        </tr>
                                        <tr>
                                                <td class="border px-4 py-2">Assignment 1</td>
                                                <td class="border px-4 py-2">2023-04-03 10:11</td>
                                                <td class="border px-4 py-2">2</td>
                                        </tr>
                                        <tr>
                                                <td class="border px-4 py-2">Assignment 2</td>
                                                <td class="border px-4 py-2">2023-04-03 10:11</td>
                                                <td class="border px-4 py-2">2</td>
                                        </tr> */}
                                        <tr>
                                                <td colSpan={2} class="border px-4 py-2 text-xl font-semibold text-gray-800">Total Grade</td>
                                                <td class="border px-4 py-2 font-semibold">{enroll?.total_score}</td>
                                        </tr>
                                        </tbody>
                                </table>
                        </div>
                        {/* <div class="mt-4">
                                <h2 class="text-xl font-semibold text-gray-800">Exam Date</h2>
                                <p class="mt-2 text-gray-700"><span class="font-semibold">Exam Date:</span> Exam_Date</p>
                        </div> */}
                </div>
        </Box>
        <ButtonContainer>
                <Button label="back" onClick={back} />
        </ButtonContainer>
            </>;
}