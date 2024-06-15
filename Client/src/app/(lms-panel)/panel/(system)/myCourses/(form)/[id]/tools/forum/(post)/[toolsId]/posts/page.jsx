"use client";
import { useConfig } from "@/lib/config";
import { Page } from "@/Components/Forum/Page"

export default function List({params}){
    const {laraAdmin ,nextAdmin } = useConfig();

    return <Page toolsId={params.toolsId} course={params.id} laraPath={laraAdmin} nextPath={nextAdmin} access={true} />
}