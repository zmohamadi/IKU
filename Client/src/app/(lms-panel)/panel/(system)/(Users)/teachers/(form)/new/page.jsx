"use client";
import Form from '../../../users/form';

export default function New(){
    return(
        <div>
            <Form link="/teachers" roleFilter="2"></Form>
        </div>
    );
}