"use client";
import List from '../../../../../(Users)/users/page';

export default function Students({params}){
    let course = params?.id;
    return(
        <div>
            <List link={"/classes/"+course+"/students"} displayRole={false} view="true"></List>
        </div>
    );
}