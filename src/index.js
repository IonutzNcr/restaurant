// Append header with its events;
// Append home page;

import  btnContact  from "./contact-btn";
import  btnHome  from "./home-btn";
import createHomePage from "./home-page";
import  btnMenu  from "./menu-btn";

import "./style.css";
import pageActive from "./style";

const header = document.createElement("header");

const nav = document.createElement("nav");

nav.appendChild(btnHome());
nav.appendChild(btnMenu());
nav.appendChild(btnContact());

header.appendChild(nav);

document.querySelector("#content").appendChild(header);

const main = document.createElement("main");
main.setAttribute("class","main");

document.querySelector("#content").appendChild(main);

createHomePage();

const footer = document.createElement("footer");
const copy = document.createElement("p");
copy.textContent = "Copyright Ionut";
footer.appendChild(copy);

document.querySelector("#content").appendChild(footer);



pageActive(document.querySelectorAll("nav p")[0]);


