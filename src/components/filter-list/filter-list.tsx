import { clear } from 'console';
import { Key, useEffect } from 'react';
import { KeyObject } from 'tls';
import { AddJobList } from '../input-list/input-list';
import { jobList } from '../json-file/data'

let arrFilters = ['JavaScript', 'Python'];


//concatenar tools, language, role, e level em um array que será atribuída a key chamada filters
const ConcatFiltersJobList =
    //faço um map em cada bloco do array {}
    jobList.map( (array: any) => {
        //arrayConcat terá um array com os valores constantes em role, level, array e languages
        let arrayConcat = [array.role, array.level];
        arrayConcat = arrayConcat.concat(array.languages, array.tools) //como languages e tools é um array, faço eles serem concatenados em um só array
        console.log(arrayConcat);
        let filterInArray = Object.assign(array, {filters: arrayConcat}); //object.assign pode atribuir multiplas propriedades em um objeto. Adiciono a key filters com os valores concatenados no array do jobList
        console.log(filterInArray);
        return filterInArray //retorno o array com a key adicionada
                
    })

console.log (ConcatFiltersJobList)

let arrayLinguagem = ['JavaScript', 'Python']
function array() {   
    for (let index = 0; index < ConcatFiltersJobList.length; index++) {
        
        console.log(multipleInArray(ConcatFiltersJobList[index], arrayLinguagem)); //verifico se cada array constante em um índice de filtros batte com o valor de arrayLinguagem
        
    }
} 
array();


//fará um filtro do jobList com os filtros já concatenados, retornando o bloco em que a key filters contenha os valores dentro de arrayFilters
export const ResultFilterJob = ConcatFiltersJobList.filter( (obj) => {
    
    
    return arrFilters.every((value: any) => {
        return obj.filters.includes(value);
    });
} )

console.log(ResultFilterJob);

//The multipleInArray function takes an array and a collection of values and checks if the specified values exist in the array.

//If the condition is met for all values, the function returns true, otherwise, false is returned.
//função para verificar multiplos valores dentro de um array
//https://bobbyhadz.com/blog/javascript-check-if-multiple-values-exist-in-array
function multipleInArray(arr: any, values: any) {
    return values.every((value: any) => {
      return arr.filters.includes(value);
    });
}
    


// ===========Original
export const ResultFilter = jobList.filter(filterlist)
console.log(ResultFilter);

export function filterlist(array: any) {
    //console.log(array);
    //return array.languages == "JavaScript" ;
    const searchValueInArray = 
    
        
        array.languages &&
        array.languages.includes(arrFilters[0]) && 
        array.languages.includes(arrFilters[1]);
    //const searchValueInArray = array.languages.some(['JavaScript','HTML']); 
    console.log(searchValueInArray);
    return searchValueInArray;
    

}; 
