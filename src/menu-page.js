// Create menu page
import src1 from "./menu1.jpg";
import src2 from "./menu2.jpg";
import src3 from "./menu3.jpg";


const createMenuPage = ()=>{
    console.log("Menu");
    const main  = document.querySelector(".main");
    const section = document.createElement("section");
    const title = document.createElement("h2");
    title.textContent="Menu!";
    section.appendChild(title);
    // div 1
    const div1 = document.createElement("div");
    const img1 = document.createElement("img");
    img1.setAttribute("src",src1);
    img1.setAttribute("alt","image");
    const description1 = document.createElement("p");
    description1.textContent = "Mi casa tu casa paraprapr Mi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparaprapr aprapra rapraprarp arparparap rapraprapra arparaprapr";
    const price = document.createElement("p");
    price.setAttribute("class","price");
    price.textContent="40 euros";
    description1.appendChild(price);
    //div 2 
    const div2 = document.createElement("div");
    const img2 = document.createElement("img");
    img2.setAttribute("src",src2);
    img2.setAttribute("alt","image");
    const description2 = document.createElement("p");
    description2.textContent = "Mi casa tu casa parapraprapraprMi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparaprapr dsq dqa  sqdq rapraprarp arparparap rapraprapra arparaprapr";
    const price2 = document.createElement("p");
    price2.setAttribute("class","price");
    price2.textContent="26 euros";
    description2.appendChild(price2);
    //div 3
    const div3 = document.createElement("div");
    const img3 = document.createElement("img");
    img3.setAttribute("src",src3);
    img3.setAttribute("alt","image");
    const description3 = document.createElement("p");
    description3.textContent = "Mi casa tu casa paraprapraprapra raprapraMi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparaprapr rp arparparap rapraprapra arparaprapr";
    const price3 = document.createElement("p");
    price3.setAttribute("class","price");
    price3.textContent="50 euros";
    description3.appendChild(price3);

    div1.appendChild(img1);
    div1.appendChild(description1);
    div2.appendChild(img2);
    div2.appendChild(description2);
    div3.appendChild(img3);
    div3.appendChild(description3);
    section.appendChild(div1);
    section.appendChild(div2);
    section.appendChild(div3);
    
    main.appendChild(section);
}

export default createMenuPage;