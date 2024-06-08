"use client";
import Form from '../../../users/form';

export default function New(){
    return(
        <div>
            <Form link="/students" roleFilter="2"></Form>
        </div>
    );
}