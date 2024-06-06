"use client";
import { useConfig } from "@/lib/config";
import { Page } from "@/Components/Meeting/Page"

export default function List({params}){
    const {laraAdmin ,nextAdmin } = useConfig();

    return <Page course={params.id} laraPath={laraAdmin} nextPath={nextAdmin} access={true} />
}