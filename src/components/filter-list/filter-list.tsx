import { jobList } from '../json-file/data'

export let arrFilters: Array<any> = [];

//concatenar tools, language, role, e level em um array que será atribuída na key chamada filters
const ConcatFiltersJobList =
    //faço um map em cada bloco do array {}
    jobList.map( (array: any) => {
        //arrayConcat terá um array com os valores constantes em role, level, array e languages
        let arrayConcat = [array.role, array.level];
        arrayConcat = arrayConcat.concat(array.languages, array.tools) //como languages e tools é um array, faço eles serem concatenados em um só array
        //console.log(arrayConcat);
        let filterInArray = Object.assign(array, {filters: arrayConcat}); //object.assign pode atribuir multiplas propriedades em um objeto. Adiciono a key filters com os valores concatenados no array do jobList
        //console.log(filterInArray);
        return filterInArray //retorno um novo objeto array com a key adicionada
                
    })

//console.log (ConcatFiltersJobList)


//fará um filtro do jobList com os filtros já concatenados, retornando o bloco em que a key filters contenha os valores dentro de arrayFilters
export function ResultFilterJob(): any { return ConcatFiltersJobList.filter( (obj) => {
    
    
    //function takes an array and a collection of values and checks if the specified values exist in the array.
    //If the condition is met for all values, the function returns true, otherwise, false is returned.
    //método every para verificar se o array de filtros consta dentro de includes. Só retornará true no bloco que retornar true em todos os filtros. 
    //https://bobbyhadz.com/blog/javascript-check-if-multiple-values-exist-in-array
    //console.log(arrFilters);
    return arrFilters.every((value: any) => {
        return obj.filters.includes(value);
    });
} )
}

