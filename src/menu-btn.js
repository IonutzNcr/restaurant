//create btn menu with its event

import createMenuPage from "./menu-page";
import clearMain from "./supression";
import pageActive from "./style";

const btnMenu = () => {
    const menu = document.createElement("p");
    menu.setAttribute("class","nv");
    menu.textContent = "Menu";
    menu.addEventListener("click",clearMain);
    menu.addEventListener("click",createMenuPage);
    menu.addEventListener("click",pageActive.bind(null,menu));
    
    return menu;
} 

export default btnMenu;