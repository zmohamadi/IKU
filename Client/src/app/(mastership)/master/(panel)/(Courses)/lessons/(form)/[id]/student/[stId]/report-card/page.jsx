"use client";
import { useConfig } from "@/lib/config";
import { ReportCard } from "@/Components/Users/ReportCard"

export default function List({params}){
    const {laraAdmin } = useConfig();

    return <ReportCard  course={params.id} id={params.stId} laraPath={laraAdmin} access={true} />
}