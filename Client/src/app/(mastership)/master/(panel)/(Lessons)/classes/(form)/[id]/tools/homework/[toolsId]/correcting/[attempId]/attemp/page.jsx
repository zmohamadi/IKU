"use client";
import { useConfig } from "@/lib/config";
import { UserPage } from "@/Components/Homework/Correcting/UserPage"

export default function List({params}){
    const {laraAdmin } = useConfig();
    return <UserPage  lesson={params.id} attemp={params.attempId} toolsId={params.toolsId} laraPath={laraAdmin} />
}