"use client";
import List from '../users/page';

export default function Personnels(){
    return(
        <div>
            <List link="/personnels" displayRole={false}></List>
        </div>
    );
}