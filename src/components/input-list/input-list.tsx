
//aqui estou criando uma arrow função, que receberá como parâmetros um array e um elemento do html, onde será introduzido a lista de empresas.

import { useEffect } from "react";

let language: NodeListOf<Element>;
let stack: NodeListOf<Element>;
let tools: NodeListOf<Element>;

//no arquivo main.tsx foi indicado o objeto em json constante em data.tsx e o elemento do html com classe 'list'
export const AddJobList = (array: Array<any>, element: HTMLElement) => {
    //faço um map do array indicado como parâmetro. Para cada indice do array, será executada a arrow function, que receberá o parametro item.
    array.map(itemArray => {
        //atribuo na const li a criação de um novo elemento html que será do tipo li
        const li = document.createElement('li') as HTMLElement;
        li.className = "list-item"; //adiciono a classe que terá esse novo elemento
        li.id = itemArray.id;
        li.innerHTML =
            `
            <section class="job-information">
                <div>
                    <img src="${itemArray.logo}" alt="logo" />
                </div>
                <div class="company-information">
                    <div> 
                        <h1 class="company-name">${itemArray.company}</h1> ${verifNew()} ${verifFeatured()}
                    </div>
                    <h2 class="position-name">${itemArray.position}</h2>
                    <div class="information">
                        <li>${itemArray.postedAt}</li> <li class="dot">${itemArray.contract}</li> <li class="dot">${itemArray.location}</li>
                    </div>    
                </div>
            </section>
            ` //estou adicionando uma template string no innerHTML


        element.appendChild(li); //element = a section indicada pela classe list. Cria um novo elemento dentro da section, que sera uma li

        //agora vou criar uma section dentro de li que conterá as tags que serão usadas para filtrar as informações
        const creatSection = document.createElement('section');
        creatSection.className = "tags";
        li.appendChild(creatSection);

        //adicionando o item do array denominado "role", onde diz se é a vaga é para front, back, ou fullstack
        const creatPRole = document.createElement('p');
        creatPRole.className = 'stack';
        creatPRole.textContent = itemArray.role;
        creatSection.appendChild(creatPRole);

        //adicionando o nível da vaga (junior, pleno, senior)
        const creatPLevel = document.createElement('p')
        creatPLevel.textContent = itemArray.level;
        creatSection.appendChild(creatPLevel);

        //aqui eu adiciono os itens constantes no array language dentro da section criada
        //dentro de cada map, será executado um loop com o for de acordo com o lenght do array naquele objeto.
        for (let i = 0; i < itemArray.languages.length; i++) {
            const creatPLanguages = document.createElement('p');
            creatPLanguages.className = 'languages';
            creatPLanguages.textContent = itemArray.languages[i]; //é criado um <p> com o ítem do indice do loop          
            creatSection.appendChild(creatPLanguages);

        }

        //agora um for para adicionar as ferramentas exigidas pela vaga, constantes no campo "tools" do array
        for (let i = 0; i < itemArray.tools.length; i++) {
            const creatPTools = document.createElement('p');
            creatPTools.textContent = itemArray.tools[i]; //é criado um <p> com o ítem do indice do loop          
            creatSection.appendChild(creatPTools);
        }

        //criei função verifNew e verifFeatured, que buscará no array constante na data de New e Featured são true ou false
        //se forem true, retornarão uma template string com o respectivo elemento html, com a classe e conteúdo, do contrário o retorno será em branco.
        function verifNew() {
            if (itemArray.new == true) {
                return (`<span class="new">NEW!</span>`)
            } else {
                return (``)
            }
        }

        function verifFeatured() {
            if (itemArray.featured == true) {
                return (`<span class="featured">FEATURED</span>`)
            } else {
                return (``)
            }
        }

    })//final do array.map
    captureElementsStack(); //após mapear os elementos, essa função será executada
    captureElementsLanguage(); //após mapear os elementos, essa função será executada

}//final da arrow function da const AddJobList


function captureElementsLanguage() {
    //capturo todos os elementos com a classe languages e faço um índice deles no for.
    //ao elemento ser clicado, retornará 'ok' no console.
    language = document.querySelectorAll('.languages');
    for (let i = 0; i < language.length; i++) {
        console.log(language[i]);
        language[i].addEventListener('click', () => {

            console.log('ok');
        })
    }
}

function captureElementsStack() {
    //capturo todos os elementos com a classe stack e faço um índice deles no for.
    //ao elemento ser clicado, retornará 'okStack' no console.
    stack = document.querySelectorAll('.stack');
    for (let i = 0; i < stack.length; i++) {
        console.log(stack[i]);
        stack[i].addEventListener('click', () => {

            console.log('okStack');
        })
    }
}

