import { useEffect } from 'react';
import { AddJobList } from '../input-list/input-list';
import { jobList } from '../json-file/data'


export const ResultFilter = jobList.filter(filterlist)

console.log(ResultFilter);

export function filterlist(array: any) {
    
    return array.languages == "JavaScript"  

};

