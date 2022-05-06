//create btn Home with its events
import createHomePage from "./home-page";
import clearMain from "./supression";
import pageActive from "./style";

const btnHome = () => {
    const home = document.createElement("p");
    home.setAttribute("class","nv");
    home.textContent = "Home";
    home.addEventListener("click",clearMain);
    home.addEventListener("click",createHomePage);
    home.addEventListener("click",pageActive.bind(null,home));
    
    return home;
} 

export default btnHome;