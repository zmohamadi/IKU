"use client";
import Form from '../../../users/form';

export default function New(){
    return(
        <div>
            <Form link="/personnels" roleFilter="0"></Form>
        </div>
    );
}