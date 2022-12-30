import { clear } from 'console';
import { useEffect } from 'react';
import { AddJobList } from '../input-list/input-list';
import { jobList } from '../json-file/data'

let linguagem = ['JavaScript', 'Python'];

export const ResultFilter = jobList.filter(filterlist)


console.log(ResultFilter);
console.log(filterlist);

export function filterlist(array: any) {
    //console.log(array);
    //return array.languages == "JavaScript" ;
    const searchValueInArray = 
        
        array.languages &&
        array.languages.includes(linguagem[0]) && 
        array.languages.includes(linguagem[1]); 
    //const searchValueInArray = array.languages.some(['JavaScript','HTML']); 
    console.log(searchValueInArray);
    return searchValueInArray;
    

};

