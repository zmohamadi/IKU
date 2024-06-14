'use client'

import {Tools} from './Tools';

export class CategiriesPrepare{
    static prepare(obj, title='title') {
        let result = [];

        // alert(obj);
        Tools.getArray(obj).forEach(element => {
            let item = {id: element.id, text: element[title]};
            if(element.childs != undefined && element.childs.length > 0){
                item.inc = [];
                element.childs.forEach(elem=>{
                    let child = {id: elem.id, text: elem[title]};
                    if(elem.childs != undefined && elem.childs.length > 0){
                        child.inc = [];
                        elem.childs.forEach(el=>{
                            child.inc.push({id: el.id, text: el[title]});
                        });
                    }
                    item.inc.push(child);
                })
            }
            result.push(item);
        });
        return result;
    }
}
