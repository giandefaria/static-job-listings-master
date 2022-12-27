import './main.css';
import { useEffect, useLayoutEffect } from 'react';
import { jobList } from '../json-file/data';
import { AddJobList } from '../input-list/input-list';

export let filter: HTMLElement;

export default function Principal() {

    //useEfect utilizado para chamar a variável list somente após a rendereização. Antes disso ela acaba retornando null
    useEffect(() => {
        console.log('fire')
        const list = document.querySelector('.list') as HTMLElement;
        filter = document.querySelector('.filters') as HTMLElement
        list.innerHTML= '' //limpo o html a cada chamada da função, para evitar bugs causados pela execução da função addjoblist mais de uma vez. A repetição dupla é causada pelo react.strictmode localizado no index.tsx
        AddJobList(jobList, list);

    }, [])

    return (
        <>  
            <header>

            </header>
            <main>
                <section className='filters'>

                </section>

                <section>
                    <div className='list'></div>
                    <div className='clear-all'></div>

                </section>
            
            </main>
     </>
     
    )

        

}



