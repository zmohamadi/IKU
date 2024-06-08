"use client";

import Form from '../../../../users/form';

export default function Edit({params}){
    return(
        <div>
            <Form id={params.id} link="/teachers" roleFilter="1"></Form>
        </div>
    );
}