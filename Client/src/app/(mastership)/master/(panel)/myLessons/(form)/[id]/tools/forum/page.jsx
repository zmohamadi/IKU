"use client";
import { useConfig } from "@/lib/config";
import { Page } from "@/Components/ForumSubject/Page"

export default function List({params}){
    const {laraAdmin ,nextAdmin } = useConfig();

    return <Page lesson={params.id} laraPath={laraAdmin} nextPath={nextAdmin} access={true} />
}