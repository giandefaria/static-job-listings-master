import { ResultFilter, ResultFilterJob, testeFilters } from '../filter-list/filter-list'
import { AddJobList } from '../input-list/input-list'
import { clearAllFilter, filter, filterContent } from '../main/main'

//export let testeFilters: any = []

//função para adicionar um parágrafo no campo filtro. Receberá o parâmetro da TAG e o número do índice daquela tag, informações necessárias para especificar qual a tag clicada.
export function createFilter(tags: any, i : number) {
    
    let tagOnList = false //variável se a tag selecionada já existe na lista ou não
    const filterChildrens = filter.children as HTMLCollectionOf<Element> //seleciono os parágrafos filhos da div filter, onde estarão os elementos das tags

    for (let index = 0; index < filterChildrens.length; index++) {
       if (filterChildrens[index].children[0].innerHTML == tags[i].innerHTML) {tagOnList = true} // se o conteúdo de alguma das classes filhas for igual a tag clicada, o tagOnList será true;
    }
    
    if (tagOnList == false) {
        const createDiv = document.createElement('div') //cria uma div
            createDiv.className = 'tag-and-button'
        const createButton = document.createElement('button'); //crio o botão com o ícone de excluir a div
            createButton.className = 'close-button';
        const selectedfilter = document.createElement('p'); //uma const para criar um novo parágrafo
            selectedfilter.textContent = tags[i].innerHTML;  // o que conterá dentro desse novo parágrafo
            selectedfilter.className = 'selected-filter';
        
        testeFilters.push(tags[i].innerHTML) //adiciono o filtro selecionado dentro da variável filters
        console.log(testeFilters);    

        filter.appendChild(createDiv); //esse nova div será criada dentro do elemento de classe filter
        createDiv.appendChild(selectedfilter);//esse novo parágrafo será criado dentro da div
        createDiv.appendChild(createButton); //o botão com a imagem de fechar será criado dentro da div

        createClearAllFilterContent(); //cria o elemento 'clear' no html
        removeFilterOnClick(); //executarei a função para atualizar o array de filtros
        const list = document.querySelector('.list') as HTMLElement;
        list.innerHTML= '' //limpo o html a cada chamada da função, para evitar bugs causados pela execução da função addjoblist mais de uma vez. A repetição dupla é causada pelo react.strictmode localizado no index.tsx
        //AddJobList(ResultFilter, list);//adiciono lista filtrada
        AddJobList(ResultFilterJob, list);
        
        
    } else { alert(`Filtro ${tags[i].innerHTML} já adicionado!`) } //se for true, exibo alerta dizendo que o filtro já foi adicionado

} //fim da função createFilter

//cria o elemento 'clear' no  html
function createClearAllFilterContent() {
    clearAllFilter.innerHTML = 'Clear'
    filterContent.classList.add('filters-content-active') //ativo a classe do filtercontent;

};

//remove os filtros e o campo clear
export function clearAll() {
    filter.innerHTML = ""
    clearAllFilter.innerHTML = ""
    filterContent.classList.remove('filters-content-active'); //removo a classe active
}

//função que montará um array com os filtros adicionados, e ao ser clicado, excluirá a div classe tag-and-button
function removeFilterOnClick() {

    let filter = document.querySelectorAll('.close-button'); //cria a variável que selecionará todos os elementos com a classe 'close-button'
    for (let index = 0; index < filter.length; index++) {
        filter[index].addEventListener('click', () => {
            filter[index].parentElement?.remove(); //o filtro ao ser clicado será excluída a div principal
        })
        
    }
}