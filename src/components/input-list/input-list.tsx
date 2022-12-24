//função que adicionará a lista no html

import '../json-file/data';

const list = document.querySelector('.list');

//aqui estou criando uma função, que receberá como parâmetros um array e um elemento do html, onde será introduzido a lista
const addJobList = (array: Array<any>, element: HTMLElement) => {
    array.forEach(item => {
        //atribuo li a criar um novo elemento li e indico o classname desse li além do item que ela conterá
        const li = document.createElement('li');
        li.className = "list-item";
    })

} 

console.log('importado');