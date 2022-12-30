import { useEffect } from 'react';
import { AddJobList } from '../input-list/input-list';
import { jobList } from '../json-file/data'

let linguagem = ['JavaScript'];

export const ResultFilter = jobList.filter(filterlist)

console.log(ResultFilter);
console.log(filterlist);

export function filterlist(array: any) {
    console.log(array);
    //return array.languages == "JavaScript" ;
    const searchValueInArray = array.languages.includes(linguagem); 
    return searchValueInArray;
    

};

