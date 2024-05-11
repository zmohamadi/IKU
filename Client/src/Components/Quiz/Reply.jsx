"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";
import { useData,useFormRefs } from "@/Theme/Midone/Utils";
import { Box, Button, ButtonContainer, Input } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
import CircleTimer from './CircleTimer';
import { useUtility } from "@/lib/utility";
import { Answer } from "../Public/Question/Answer";

export function Reply({laraPath, course, id, nextPath=""}){
    
    const router = useRouter();
    const back = ()=>router.back();
    const {Lang} = useLang();
    let component = useFormRefs();
    const [timer, setTimer] = useState(30);
    const [quizEnded, setQuizEnded] = useState(false);
    const {reload } = useUtility();
    const effectRan = useRef(false);

    let {get,save,postData} = useData();
    let formUrl = "/quiz";
    let url = laraPath+formUrl+"/"+id;

    useEffect(() => {
        if (!effectRan.current) {
            get(url, component, "info");
            setTimer(component?.state?.info?.limit_time);
            save(laraPath+formUrl+"/attemp/"+id, component, "new");
        }
        return () => effectRan.current = true;
    }, []);

    const closeQuiz = () => {
        setQuizEnded(true);
        postData(laraPath+formUrl+"/reply/"+id, component);
    };

    // useEffect(() => {
    //     setTimer(component?.state?.info?.limit_time);
    // }, []);

    const colors = ['#FF6347', '#FFD700', '#32CD32'];

    
    const saveItem = () => save(laraPath+formUrl+"/reply/"+id, component, "new", nextPath+"/courses/"+course+"/tools/quiz"+"?"+Math.random());

    let data = component?.state?.info;
    return(<>
        <Box cols="grid-cols-1" title={data.title} >
            <Input type="hidden" value={course} refItem={[component, "course_id"]} />
            <div className="timer">
                <CircleTimer duration={timer} onComplete={closeQuiz} />
            </div>
            <Answer questions={data?.questions} component={component}/>
                
            {quizEnded ? <p className="font-bold font-medium text-xl" style={{color:'orange'}}>Time Ended</p> :""}

        </Box>
        <ButtonContainer>
            <Button label="back" onClick={back} />
            {
                !quizEnded? <Button label="save" onClick={saveItem} /> : ''
            }
        </ButtonContainer>
    </>
);
}