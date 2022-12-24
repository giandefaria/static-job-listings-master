import './main.css';
import { useEffect, useLayoutEffect } from 'react';
import { jobList } from '../json-file/data';
import { AddJobList } from '../input-list/input-list';


export default function Principal() {

    //useEfect utilizado para chamar a variável list somente após a rendereização. Antes disso ela acaba retornando null
    useEffect(() => {
        console.log('fire')
        const list = document.querySelector('.list') as HTMLElement;
        list.innerHTML= ''
        AddJobList(jobList, list);

    }, [Principal])

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



