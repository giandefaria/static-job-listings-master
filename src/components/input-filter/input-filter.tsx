import { filter } from '../main/main'


export function createFilter(element: any, i : number) {

    const selectedfilter = document.createElement('p');
    selectedfilter.textContent = element[i].innerHTML;
    console.log(element[i].innerHTML);
    filter.appendChild(selectedfilter);

}