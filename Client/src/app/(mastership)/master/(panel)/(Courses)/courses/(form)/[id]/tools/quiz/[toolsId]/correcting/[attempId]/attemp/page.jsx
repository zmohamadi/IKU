"use client";
import { useConfig } from "@/lib/config";
import { UserPage } from "@/Components/Quiz/Correcting/UserPage"

export default function List({params}){
    const {laraAdmin ,nextAdmin } = useConfig();
// console.log(params.attempId);
    return <UserPage  course={params.id} attemp={params.attempId} toolsId={params.toolsId} laraPath={laraAdmin} nextPath={nextAdmin} access={true} />
}