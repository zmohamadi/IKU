"use client";
import List from '../users/page';

export default function Teachers(){
    return(
        <div>
            <List link="/teachers" displayRole={false}></List>
        </div>
    );
}