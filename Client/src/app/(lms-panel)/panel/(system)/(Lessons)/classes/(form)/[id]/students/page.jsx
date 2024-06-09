"use client";
import List from '../../../../../(Users)/users/page';

export default function Students({params}){
    let lesson = params?.id;
    return(
        <div>
            <List link={"/classes/"+lesson+"/students"} displayRole={false} view="true"></List>
        </div>
    );
}