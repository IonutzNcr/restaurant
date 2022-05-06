//Create contact btn with its events

import createContactPage from "./contact-page";
import clearMain from "./supression";
import pageActive from "./style";


function btnContact() {
    const contact = document.createElement("p");
    contact.setAttribute("class","nv");
    contact.textContent = "Contact";
    contact.addEventListener("click",clearMain);
    contact.addEventListener("click",createContactPage);
    contact.addEventListener("click",pageActive.bind(null,contact));
    return contact;
} ;

export default btnContact;