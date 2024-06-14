"use client";
import List from '../users/page';

export default function Personnels(){
    return(
        <div>
            <List title="personnels" link="/personnels" displayRole={false}></List>
        </div>
    );
}