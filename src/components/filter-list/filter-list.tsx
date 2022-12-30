import { clear } from 'console';
import { useEffect } from 'react';
import { AddJobList } from '../input-list/input-list';
import { jobList } from '../json-file/data'

let linguagem = ['JavaScript' && 'Pyton'];

export const ResultFilter = jobList.filter(filterlist)

console.log(ResultFilter);
console.log(filterlist);

export function filterlist(array: any) {
    //console.log(array);
    //return array.languages == "JavaScript" ;
    const searchValueInArray = 
        array.languages.includes(['JavaScript' && 'Python'])
        array.languages.includes(['JavaScript' && 'Python']) //&& 
        //array.languages.includes('Python'); 
    //const searchValueInArray = array.languages.some(['JavaScript','HTML']); 
    console.log(searchValueInArray);
    return searchValueInArray;
    

};

