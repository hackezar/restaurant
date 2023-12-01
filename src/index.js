import './style.css';
import  './firstPageRender.js';
import { homePage } from './firstPageRender.js';
import { menuRender } from './menuRender';
import { contactRender } from './contactRender.js';

function createHeadBar () {
    const headBar = document.createElement('div')
    headBar.classList.add('headBar');
    const contactTabList = document.createElement('ul');
    contactTabList.classList.add('headBarList');
    const contactTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const anchorMenu = document.createElement('a');
    const anchorContact = document.createElement('a');
    const mainTab = document.createElement('li');
    const anchorMain = document.createElement('a');
    anchorMain.innerText = 'Main';
    anchorMain.classList.add('link');
    anchorMenu.classList.add('link');
    anchorContact.classList.add('link');
    anchorMenu.addEventListener("click", menuRender);
    anchorMain.addEventListener('click', homePage);
    anchorContact.addEventListener('click', contactRender);
    anchorMenu.innerText = 'Menu';
    anchorContact.innerText = 'Contact';
    mainTab.appendChild(anchorMain);
    contactTabList.appendChild(mainTab);
    menuTab.appendChild(anchorMenu);
    contactTab.appendChild(anchorContact);
    contactTabList.appendChild(contactTab);
    contactTabList.appendChild(menuTab);
    headBar.appendChild(contactTabList);
    document.body.appendChild(headBar);
}

createHeadBar();
homePage();

