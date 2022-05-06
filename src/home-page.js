//create Home page

import src1 from "./home1.jpg";
import src2 from "./home2.jpg";
import src3 from "./home3.jpg";

const createHomePage=()=>{
    console.log("Home");
    const main  = document.querySelector(".main");
    const section = document.createElement("section");
    const title = document.createElement("h2");
    title.textContent="News";
    section.appendChild(title);
    // div 1
    const div1 = document.createElement("div");
    const img1 = document.createElement("img");
    img1.setAttribute("src",src1);
    img1.setAttribute("alt","image");
    const description1 = document.createElement("p");
    description1.textContent = "Mi casa tu casa paraprapraprapra rapraprarp Mi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparaprapr Mi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparaprapr Mi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparapraprarparparap rapraprapra arparaprapr";
    //div 2 
    const div2 = document.createElement("div");
    const img2 = document.createElement("img");
    img2.setAttribute("src",src2);
    img2.setAttribute("alt","image");
    const description2 = document.createElement("p");
    description2.textContent = "Mi casa tu Mi casa tu casa paraprapraprapra rapraprarp Mi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparaprapr Mi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparaprapr Mi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparapraprarparparap rapraprapra arparaprapr casa parapraprapraprdsq dqa  sqdq rapraprarp arparparap rapraprapra arparaprapr";
    //div 3
    const div3 = document.createElement("div");
    const img3 = document.createElement("img");
    img3.setAttribute("src",src3);
    img3.setAttribute("alt","image");
    const description3 = document.createElement("p");
    description3.textContent = "Mi casa Mi casa tu casa paraprapraprapra rapraprarp Mi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparaprapr Mi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparaprapr Mi casa tu casa paraprapraprapra rapraprarp arparparap rapraprapra arparapraprarparparap rapraprapra arparapraprprapraprapra rapraprarp arparparap rapraprapra arparaprapr";

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

export default createHomePage;