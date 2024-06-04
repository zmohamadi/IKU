"use client";
import { useLang } from "@/lib/lang";
import { Grid, Frame} from "@/Theme/Midone/Utils";
import {Items} from './Items'

export function PageProfile({laraPath, nextPath, access}){

    const {Lang} = useLang();
    const formUrl = "/courses/list"; 

    let info = {
        insertLink: access? nextPath+"/courses/new": "",
        url: laraPath+formUrl,
        theme: (item)=> <Items formUrl={formUrl}  access={access} item={item} laraPath={laraPath} nextPath={nextPath} />
    }

    return(
        <Frame title={Lang(["public.courses"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}