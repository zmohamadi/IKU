"use client";
import List from '../users/page';

export default function Students(){
    return(
        <div>
            <List title="students" link="/students" displayRole={false} view="true"></List>
        </div>
    );
}