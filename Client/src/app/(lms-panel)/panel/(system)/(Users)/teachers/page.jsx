"use client";
import List from '../users/page';

export default function Teachers(){
    return(
        <div>
            <List title="teachers" link="/teachers" displayRole={false} view="true"></List>
        </div>
    );
}