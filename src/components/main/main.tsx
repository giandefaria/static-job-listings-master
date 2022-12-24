import './main.css';
import { useEffect, useLayoutEffect } from 'react';
import { jobList } from '../json-file/data';
import { AddJobList } from '../input-list/input-list';


export default function Principal() {

    //useEfect utilizado para chamar a variável list somente após a rendereização. Antes disso ela acaba retornando null
    useEffect(() => {
        const list = document.querySelector('.list') as HTMLElement;
        if (list != null) {
            console.log(list);
            AddJobList(jobList, list);
        }
    })

    return (
        <>  
            <header>

            </header>
            <main>
                <section className='filters'>

                </section>

                <section className="list">

                </section>
            
            </main>
     </>
     
    )

        

}



