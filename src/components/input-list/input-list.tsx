
//aqui estou criando uma arrow função, que receberá como parâmetros um array e um elemento do html, onde será introduzido a lista.
export const AddJobList = (array: Array<any>, element: HTMLElement) => {
    //faço um map do array indicado como parâmetro. Para cada indice do array, será executada a arrow function, que receberá o parametro item.
    array.map(itemArray => {
        //atribuo na const li a criação de um novo elemento html que será do tipo li
        const li = document.createElement('li') as HTMLElement;
        console.log(array);
        console.log(itemArray);
        li.className = "list-item"; //adiciono a classe que terá esse novo elemento
        li.id = itemArray.id;
        li.innerHTML = 
        `
            <section class="job-information">
                <div>
                    <img src="${itemArray.logo}" alt="logo" />
                </div>
                <div>
                    <h2 class="company-name">${itemArray.company}</h2> ${verifNew()} ${verifFeatured()}
                </div>
            </section>
            <section class="tags">
            </section
        ` //estou adicionando uma template string no innerHTML
        
        
        //li.innerHTML = itemArray.company; //aqui estou indicando, inicialmente, que conterá o nome da compania dentro
        element.appendChild(li); //cria um novo elemento, que sera uma li
        console.log('repete')
    
        //add função verifNew e verifFeatured, que buscará no array constante na data de New e Featured são true ou false
        //se forem true, retornarão no elemento html uma template string com o respectivo texto, do contrário o retorno será em branco.
        function verifNew() {
            if (itemArray.new == true) {
                return (
                 `<span class="new">NEW!</span>`  
                )
                                
            } else {
                return (``)
            }
        }
        
        function verifFeatured() {
            if (itemArray.featured == true) {
                return (`<span class="featured">FEATURED</span>`)
            } else {
                return(``)
            }
        }
           
    })//final do array.map
}//final da arrow function da const AddJobList

