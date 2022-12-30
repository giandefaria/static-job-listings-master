import { useEffect } from 'react';
import { AddJobList } from '../input-list/input-list';
import { jobList } from '../json-file/data'

let linguagem;

export const ResultFilter = jobList.filter(filterlist)

console.log(ResultFilter);
console.log(filterlist);

export function filterlist(array: any) {
    console.log(array);
    //return array.languages == "JavaScript" ;
    const teste = array.languages.includes('JavaScript'); 
    return teste;
    

};

