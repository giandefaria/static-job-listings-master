import { clear } from 'console';
import { Key, useEffect } from 'react';
import { KeyObject } from 'tls';
import { AddJobList } from '../input-list/input-list';
import { jobList } from '../json-file/data'

let linguagem = ['JavaScript', 'Python'];

const Filtros = jobList.map( (job) => {

    let jobList = [job.role, job.level]
    jobList = jobList.concat(job.languages, job.tools)

    return jobList


})
console.log(Filtros)


//função para verificar multiplos valores dentro de um array
function multipleInArray(arr: any, values: any) {
    return values.every((value: any) => {
      return arr.includes(value);
    });
}

let arrayLinguagem = ['JavaScript', 'Python']
function array() {   
    for (let index = 0; index < Filtros.length; index++) {
        
        console.log(multipleInArray(Filtros[index], arrayLinguagem)); //verifico se cada array constante em um índice de filtros batte com o valor de arrayLinguagem
        
    }
} 
array();   
    


//let filtros = 'array.languages.includes(linguagem[0]) && array.languages.includes(linguagem[1]);'
let tentativaFiltroVariavel: any;
function tentativa(array: any) {
    tentativaFiltroVariavel = 'array.languages';
    for (let index = 0; index < linguagem.length; index++) {
        
        tentativaFiltroVariavel = tentativaFiltroVariavel + ` && array.languages.includes(linguagem[${index}])`
        
    }
    console.log (tentativaFiltroVariavel);
    return tentativaFiltroVariavel;

}
//tentativa()
//console.log(tentativa());
console.log(tentativaFiltroVariavel)
let testeString = 'array.languages.includes(linguagem[index])'

function tentativaFiltro () {
    const arrayFiltrado = jobList.filter((array) => {
        
        let novaTentativaFiltro: any = array.languages; 
        for (let index = 0; index < linguagem.length; index++) {
        
            novaTentativaFiltro = novaTentativaFiltro + ` &&${ array.languages.includes(linguagem[index])}`
            

            return array.languages.includes(linguagem[index])

            if (novaTentativaFiltro == true) {
                console.log ( 'true' )
            } else {
                console.log ( 'false' )
            }
            
        }
        console.log (novaTentativaFiltro);
        //criar um if e colocar condição de retornar um bolean true ou false
        //return tentativaFiltroVariavel;

        //let variavelArray = 
        
        
        
        //tentativa(array);

        //console.log(variavelArray);
        return novaTentativaFiltro;
    })
    console.log(arrayFiltrado)
}
tentativaFiltro();


//export const ResultFilter = jobList.filter(filterlist)
/* export const ResultFilter = jobList.filter(filterlist)
console.log(jobList.filter((filtro: any) => {
    let filtros = filtro.languages;

    for (let index = 0; index < linguagem.length; index++) {
        filtros = filtros + ` && filtro.languages.includes([${index}])`
        
    }

    console.log(filtros);
    return filtros;
        
})); */

/*
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
*/

/*
console.log(ResultFilter);
console.log(filterlist);

export function filterlist(array: any) {
    //console.log(array);
    //return array.languages == "JavaScript" ;
    const searchValueInArray = filtros(array);
    
        
        array.languages &&
        array.languages.includes(linguagem[0]) && 
        array.languages.includes(linguagem[1]);
    //const searchValueInArray = array.languages.some(['JavaScript','HTML']); 
    console.log(searchValueInArray);
    return searchValueInArray;
    

};
*/

// ===========Original
export const ResultFilter = jobList.filter(filterlist)
console.log(ResultFilter);

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
