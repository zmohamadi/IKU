"use client";

import Form from '../../../../users/form';

export default function Edit({params}){
    return(
        <div>
            <Form id={params.id} link="/students" roleFilter="3"></Form>
        </div>
    );
}