'use client'

import { useLang } from "@/lib/lang"
import { Breadcrumb } from "./Breadcrumb";

export function Frame({ title, children, breadcrumb=true}) {
    const {dir} = useLang();
    
    return <>
            <div className='intro-y flex flex-col items-center mt-8'>
                <h2 className={'text-xl font-header ' + (dir == "ltr"?"mr-auto":"ml-auto")}>
                    {title}
                </h2>
                <div className={(dir == "ltr"?"mr-auto":"ml-auto")}>
                    {(breadcrumb)? <Breadcrumb /> : ""}
                </div>
            </div>
            <div className='grid grid-cols-12 gap-6 mt-5'>
                {children}
            </div>
        </>           
}