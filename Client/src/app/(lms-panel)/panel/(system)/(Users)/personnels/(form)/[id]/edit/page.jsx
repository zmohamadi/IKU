"use client";

import Form from '../../../../users/form';

export default function Edit({params}){
    return(
        <div>
            <Form id={params.id} link="/personnels" roleFilter="1"></Form>
        </div>
    );
}