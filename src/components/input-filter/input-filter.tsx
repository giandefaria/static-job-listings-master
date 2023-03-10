import { arrFilters, ResultFilterJob} from '../filter-list/filter-list'
import { AddJobList } from '../input-list/input-list'
import { clearAllFilter, filter, filterContent } from '../main/main'

let list: HTMLElement;
//export let testeFilters: any = []

//função para adicionar um parágrafo no campo filtro. Receberá o parâmetro da TAG e o número do índice daquela tag, informações necessárias para especificar qual a tag clicada. Função executada no arquivo input-list.tsx
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
        
        arrFilters.push(tags[i].innerHTML) //adiciono o filtro selecionado dentro da variável filters
        //console.log(arrFilters);    

        filter.appendChild(createDiv); //esse nova div será criada dentro do elemento de classe filter
        createDiv.appendChild(selectedfilter);//esse novo parágrafo será criado dentro da div
        createDiv.appendChild(createButton); //o botão com a imagem de fechar será criado dentro da div

        createClearAllFilterContent(); //cria o elemento 'clear' no html
        removeFilterOnClick(); //executarei a função para atualizar o array de filtros
        list = document.querySelector('.list') as HTMLElement;
        list.innerHTML= '' //limpo o html a cada chamada da função, para evitar bugs causados pela execução da função addjoblist mais de uma vez. A repetição dupla é causada pelo react.strictmode localizado no index.tsx
        //AddJobList(ResultFilter, list);//adiciono lista filtrada
        AddJobList(ResultFilterJob(), list);
        
        
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
    arrFilters.splice(0, arrFilters.length); //limpar o arr filters, partindo da posição 0 até o tamanho do array;
    list.innerHTML= '' //limpo o html a cada chamada da função, para evitar bugs causados pela execução da função addjoblist mais de uma vez.    
    AddJobList(ResultFilterJob(), list);
    //console.log(arrFilters);
}

//função que montará um array com os filtros adicionados, e ao ser clicado, excluirá a div classe tag-and-button
function removeFilterOnClick() {

    let filter = document.querySelectorAll('.close-button'); //cria a variável que selecionará todos os elementos com a classe 'close-button'
    let filterName = document.querySelectorAll('.selected-filter')
    for (let index = 0; index < filter.length; index++) {
        filter[index].addEventListener('click', () => {
            filter[index].parentElement?.remove(); //o filtro ao ser clicado será excluída a div principal
            //console.log(filterName[index].innerHTML); //capturo o nome do filtro excluído para que eu possa localizá-lo e retirá-lo do arrFilters
            let indexDeletedFilterInArrFilters = arrFilters.indexOf(filterName[index].innerHTML); //capturo o índice do filtro excluído dentro do array arrFilters, e atribuo esse índice a variável indexDeletedFilterInArrFilters 

            //se o valor constante no índice indicado dentro do array, for igual ao filtro clicado, então poderá excluir o conteúdo desse índice.
            //essa condicional foi criada por causa de um bug. Caso eu excluísse o primeiro item do array, o for continuava repetindo o código até excluir todos os valores dentro do array.
            //agora, quando verifica que o valor do array não é igual ao do filtro clicado, ele não apaga mais nenhum índice do array.
            if (arrFilters[indexDeletedFilterInArrFilters] == filterName[index].innerHTML) {
                arrFilters.splice(indexDeletedFilterInArrFilters, 1);
                list.innerHTML= '' //limpo o html a cada chamada da função, para evitar bugs causados pela execução da função addjoblist mais de uma vez.    
                AddJobList(ResultFilterJob(), list);
            } else { return }
            
        })
        
    }
}