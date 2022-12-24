
//aqui estou criando uma função, que receberá como parâmetros um array e um elemento do html, onde será introduzido a lista.
export const AddJobList = (array: Array<any>, element: HTMLElement) => {
    //para cada indice do array, será executada uma função, que receberá o parametro item.
    array.map(itemArray => {
        //atribuo na const li a criação de um novo elemento html que será do tipo li
        const li = document.createElement('li') as HTMLElement;
        console.log(array);
        li.className = "list-item"; //adiciono a classe que terá esse novo elemento
        li.innerHTML = itemArray.company; //aqui estou indicando, inicialmente, que conterá o nome da compania dentro
        element.appendChild(li); //cria um novo elemento, que sera uma li

           
    })
}
