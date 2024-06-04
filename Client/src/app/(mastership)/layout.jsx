"use client";

import {useConfig} from "@/lib/config";
import StoreProvider from "@/redux/StoreProvider";
import Script from 'next/script';
import store from "@/redux/store";
import { App } from "./App";
import "./global.css";
// import { WebVitals } from '@/lib/web-vitals';


export default function Master({children}){    
    const {laraDomain} = useConfig();

    return <>        
        <html lang="en">
            <head>
                <title >{"IKIU Master"}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="admin theme" />
                <meta name="keywords" content="admin template, Icewall Admin Template, flat admin template, responsive admin template, web app" />
                {/* <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.gstatic.com" /> */}
                {/* <meta httpEquiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://localhost" /> */}
                {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src https://accounts.google.com; child-src 'none'; object-src 'none'"></meta> */}
                {/* <meta http-equiv="Content-Security-Policy" content="font-src *;"></meta> */}
                <meta name="author" content="Sanegar" />
                <link rel="stylesheet" href={laraDomain + "/admin/Midone-v3/Icewall_v1.0.9_min/dist/css/app-ltr.css"} />
                <link rel="stylesheet" href={laraDomain + "/admin/css/style.css"} />
                <Script id='tail.select' src={laraDomain + '/admin/Midone-v3/packages/tail.select.1.0.2/tail.select.min.js'} strategy='afterInteractive' />
                <Script id='jquery' src={laraDomain + '/admin/js/jquery-3.3.1.min.js'} strategy='afterInteractive' />
            </head>
            <body className="p-0">
                {/* <WebVitals /> */}
                <StoreProvider store={store}>
                    <App key={"app"}>
                        {children}
                    </App>
                </StoreProvider>
            </body>
        </html>
    </>
}