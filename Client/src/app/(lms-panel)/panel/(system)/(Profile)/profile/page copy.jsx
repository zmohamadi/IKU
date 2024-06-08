"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData,useFormRefs,Input,Textarea,Button,ButtonContainer,Box } from "@/Theme/Midone/Forms";
// import { useAuth } from '@/Theme/site/components/auth/auth'
// import Link from "next/link";

export default function page(){
    const {Lang} = useLang();
    const {laraAdmin} = useConfig();
    const formUrl = "/personnels"; 
    let component = useFormRefs();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    let uploadUrl=laraAdmin+"/upload/.-media-users";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-users";
    let uploadDir='media/users/';

    let url = laraAdmin+formUrl, method = "new", key = 0;
    // if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        getNeedles(laraAdmin+formUrl+'get-needles', setNeedles);
        get(url, component, "info");
    }, []);
    
    const saveItem = ()=>save(url, component, method, formUrl+"?"+Math.random());
   
    return <>
            <Box title={Lang(["public.edit", "public.profile"])}>
                <div className="flex col-span-12 flex-col-reverse xl:flex-row flex-col">
                    <div className="flex-1 mt-6 xl:mt-0">
                        <div className="grid grid-cols-12 gap-x-5">
                            <div className="col-span-12 xxl:col-span-6">
                                <Input required="true" label="name" refItem={[component, "name"]} />
                                <Input required="true" label="family" refItem={[component, "lname"]} />
                                <Input required="true" label="mobile" refItem={[component, "mobile"]} />
                                <Input required="true" label="username" refItem={[component, "username"]} />
                                <Input required="true" label="whatsapp" refItem={[component, "whatsapp"]} />
                                <Input required="true" label="email" type="email" refItem={[component, "email"]} />
                                {/* <SelectTail label="role" refItem={[component, "role_id"]} data={needles?.role} titleKey={"name_"+local} /> */}
                                <Textarea required="true" label="address" refItem={[component, "address"]} />
                            </div>
                        </div>
                        <ButtonContainer>
                            <Button label="save" onClick={saveItem} />
                        </ButtonContainer>
                    </div>
                    {/* <div className="w-52 mx-auto xl:ml-0 xl:mr-6">
                        <div className="border-2 border-dashed shadow-sm border-gray-200 dark:border-dark-5 rounded-md p-5">
                            <div className="h-40 relative image-fit cursor-pointer zoom-in mx-auto">
                                <img className="rounded-md" alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-10.jpg" />
                                <div title="Remove this profile photo?" className="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-21 left-0 top-0 -ml-2 -mt-2"> <i data-feather="x" className="w-4 h-4"></i> </div>
                            </div>
                            <div className="mx-auto cursor-pointer relative mt-5">
                                <button type="button" className="btn btn-primary w-full">تغییر عکس</button>
                                <input type="file" className="w-full h-full top-0 left-0 absolute opacity-0" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </Box>
        </>;
}