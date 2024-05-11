"use client";
import { FeatherIcon, Tools } from "@/Theme/Midone/Utils";
export function Show({data}){
    return(<>
        {Tools.getArray(data?.questions).map((question,qindex)=>{
            return<> <li className="mt-3" >
                <div  dangerouslySetInnerHTML={{ __html: qindex+1 +") "+ question?.title +" (score: "+question?.score+")"}}></div>
                {data?.answer?.length>0 &&question?.question_type_id==1 ?<>
                    <div  dangerouslySetInnerHTML={{ __html: " <b>Your Answer :</b> "+ data?.answer?.[qindex]?.answer }}></div>
                </> :""}
                </li>
                {question?.question_type_id==2 ?<>
                    <ul className="pl-5">
                    {Tools.getArray(question?.question_options).map((options,index)=>{
                            return <li>
                                { index+1 } {" - "+options?.title}  { data?.answer?.[qindex]?.question_option_id==options?.id?
                                <FeatherIcon spanWrapperClass="display-inline pl-1" size="16" name="CheckCircle" color="green"  />
                    :""}
                            </li>
                        })}
                </ul></> :''}
                </>
            
        })}
                    
        </>
    );
}