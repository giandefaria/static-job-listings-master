import { jobList } from '../json-file/data'


export const ResultFilter = jobList.filter(filterlist)

export function filterlist(array: any) {
    return array.languages == "JavaScript"  

};