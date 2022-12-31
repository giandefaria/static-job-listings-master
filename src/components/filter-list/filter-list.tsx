import { clear } from 'console';
import { Key, useEffect } from 'react';
import { KeyObject } from 'tls';
import { AddJobList } from '../input-list/input-list';
import { jobList } from '../json-file/data'

let linguagem = ['JavaScript', 'Python'];
//let filtros = 'array.languages.includes(linguagem[0]) && array.languages.includes(linguagem[1]);'

//export const ResultFilter = jobList.filter(filterlist)
export const ResultFilter = jobList.filter(filterlist)
console.log(jobList.filter((filtro: any) => {
    let filtros = filtro.languages;

    for (let index = 0; index < linguagem.length; index++) {
        filtros = filtros + ` && filtro.languages.includes([${index}])`
        
    }

    console.log(filtros);
    return filtros;
        
}));

function filtros(array: any) {
    let variavel = array.languages
    for (let index = 0; index < linguagem.length; index++) {
        if (array.languages.includes(linguagem[index]) == true) {
            variavel = variavel + ` && ${array.languages.includes(linguagem[index])}`
            console.log(linguagem[index])
            
        }
        
        
    }
    console.log(variavel);
    return variavel;
}


console.log(ResultFilter);
console.log(filterlist);

export function filterlist(array: any) {
    //console.log(array);
    //return array.languages == "JavaScript" ;
    const searchValueInArray = filtros(array);
    
        /*
        array.languages &&
        array.languages.includes(linguagem[0]) && 
        array.languages.includes(linguagem[1]);*/ 
    //const searchValueInArray = array.languages.some(['JavaScript','HTML']); 
    console.log(searchValueInArray);
    return searchValueInArray;
    

};

