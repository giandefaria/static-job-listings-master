//função que adicionará a lista no html

import '../json-file/data';

const list = document.querySelector('.list');

//aqui estou criando uma função, que receberá como parâmetros um array e um elemento do html, onde será introduzido a lista
const addJobList = (array: Array<any>, element: HTMLElement) => {
    array.forEach(item => {
        //atribuo na const li a criação de um novo elemento html que será do tipo li
        const li: HTMLElement = document.createElement('li');
        li.className = "list-item"; //adiciono a classe que terá esse novo elemento
        li.textContent = item.company; //aqui estou indicando, inicialmente, que conterá o nome da compania dentro
        element.appendChild(li); //cria um novo elemento, que sera uma li
    })

} 

console.log('importado');