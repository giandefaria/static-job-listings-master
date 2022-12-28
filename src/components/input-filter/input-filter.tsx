import { clearAllFilter, filter, filterContent } from '../main/main'


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

        filter.appendChild(createDiv); //esse nova div será criada dentro do elemento de classe filter
        createDiv.appendChild(selectedfilter);//esse novo parágrafo será criado dentro da div
        createDiv.appendChild(createButton); //o botão com a imagem de fechar será criado dentro da div

        createClearAllFilterContent();
        
    } else { alert(`Filtro ${tags[i].innerHTML} já adicionado!`) } //se for true, exibo alerta dizendo que o filtro já foi adicionado

}


function createClearAllFilterContent() {
    clearAllFilter.innerHTML = 'Clear'
    filterContent.classList.add('filters-content-active') //ativo a classe do filtercontent;

};

//remove os filtros e o campo clear
export function clearAll() {
    filter.innerHTML = ""
    clearAllFilter.innerHTML = ""
    filterContent.classList.remove('filters-content-active');
}

function removeFilter() {

    let filter = document.querySelectorAll('.close-button');
    for (let index = 0; index < filter.length; index++) {
        filter[index].addEventListener('click', () => {
            filter[index].parentElement?.remove();
        })
        
    }

}