import './main.css';
import { useEffect, useLayoutEffect } from 'react';
import { jobList } from '../json-file/data';
import { AddJobList } from '../input-list/input-list';
import { clearAll } from '../input-filter/input-filter';
import '../filter-list/filter-list'

export let filterContent: HTMLElement;
export let filter: HTMLElement;
export let clearAllFilter: HTMLElement;

export default function Principal() {

    //useEfect utilizado para chamar a variável list somente após a rendereização. Antes disso ela acaba retornando null
    useEffect(() => {
        console.log('fire')
        const list = document.querySelector('.list') as HTMLElement;
        filterContent = document.querySelector('.filters-content') as HTMLElement;
        filter = document.querySelector('.filters') as HTMLElement
        clearAllFilter = document.querySelector('.clear-all') as HTMLElement
        list.innerHTML= '' //limpo o html a cada chamada da função, para evitar bugs causados pela execução da função addjoblist mais de uma vez. A repetição dupla é causada pelo react.strictmode localizado no index.tsx
        AddJobList(jobList, list);

    }, [])

    return (
        <>  
            <header>

            </header>
            <main>
                <section className='filters-content'>
                    <div className='filters'></div>

                    <p className='clear-all' onClick={clearAll}></p>

                </section>

                <section className='list'>
                </section>
            
            </main>
     </>
     
    )

        

}



