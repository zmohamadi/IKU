"use client";

import { config } from "@/lib/config";

export default function Master({children}){
    return <>        
            <div className="login">
                {children}
            </div>
        </>
}