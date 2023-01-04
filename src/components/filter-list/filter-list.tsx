import { clear } from 'console';
import { Key, useEffect } from 'react';
import { KeyObject } from 'tls';
import { AddJobList } from '../input-list/input-list';
import { jobList } from '../json-file/data'

let linguagem = ['JavaScript', 'Python'];

const Filtros = jobList.map( (job) => {

    let jobList = [job.role, job.level]
    jobList = jobList.concat(job.languages, job.tools)
    //console.log(jobList)
    return jobList


})
console.log(Filtros)

//The multipleInArray function takes an array and a collection of values and checks if the specified values exist in the array.

//If the condition is met for all values, the function returns true, otherwise, false is returned.
//função para verificar multiplos valores dentro de um array
//https://bobbyhadz.com/blog/javascript-check-if-multiple-values-exist-in-array
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

//concatenar tools, language, role, e level em um array que será atribuída a key chamada filters
function concatenar() {
    //faço um map em cada bloco do array {}
    jobList.map( (array: any) => {
        //arrayConcat terá um array com os valores constantes em role, level, array e languages
        let arrayConcat = [array.role, array.level];
        arrayConcat = arrayConcat.concat(array.languages, array.tools) //como languages e tools é um array, faço eles serem concatenados em um só array
        console.log(arrayConcat);
        Object.assign(array, {filters: arrayConcat}); //object.assign pode atribuir multiplas propriedades em um objeto. Adiciono a key filters com os valores concatenados no array
        console.log(array);
                
    })
}
concatenar();

//fará um filtro do jobList, retornando o bloco em que o language contenha os valores dentro de arrayLinguagem
const ResultFilterJob = jobList.filter( (filtro) => {
    
    return arrayLinguagem.every((value: any) => {
        return filtro.languages.includes(value);
    });
} )

console.log(ResultFilterJob);
    


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
