import { filter } from '../main/main'

//função para adicionar um parágrafo no campo filtro. Receberá o parâmetro da TAG e o número do array daquela tag.
export function createFilter(tags: any, i : number) {
    
    let tagOnList = false //variável se a tag clicada já existe na lista ou não

    const filterChildrens = filter.children as HTMLCollectionOf<Element> //seleciono os parágrafos filhos da section filter, onde estarão os elementos das tags

    for (let index = 0; index < filterChildrens.length; index++) {
       if (filterChildrens[index].innerHTML == tags[i].innerHTML) {tagOnList = true} // se o conteúdo de alguma das classes filhas for igual a tag clicada, o tagOnList será true;
    }
    
    if (tagOnList == false) {
        const selectedfilter = document.createElement('p'); //uma const para criar um novo parágrafo
        selectedfilter.textContent = tags[i].innerHTML;  // o que conterá dentro desse novo parágrafo
        console.log(tags[i].innerHTML);
        filter.appendChild(selectedfilter); //esse novo parágrafo será criado dentro do elemento de classe filter
        
    }

    console.log(tagOnList);

}