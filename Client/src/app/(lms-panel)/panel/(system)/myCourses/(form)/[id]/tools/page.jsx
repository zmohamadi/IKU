"use client";
import { useConfig } from "@/lib/config";
import { ToolsIndex } from "@/Components/ToolsIndex"

export default function page({params}){
    const {nextAdmin,laraDomain } = useConfig();

    return <ToolsIndex laraDomain={laraDomain} nextPath={nextAdmin} id={params.id} />
}