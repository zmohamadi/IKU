"use client";
import { useConfig } from "@/lib/config";
import { Page } from "@/Components/Meeting/Archives/Page"

export default function List({params}){
    const {laraAdmin ,nextAdmin } = useConfig();
    const toolsId = params?.mid;
    const lesson =  params?.id;
    return <Page toolsId={toolsId} lesson={lesson} laraPath={laraAdmin} nextPath={nextAdmin} access={true} />
}