//Create contact page

const createContactPage = ()=>{
    const main = document.querySelector(".main");
    const section = document.createElement("section");
    section.setAttribute("class","contact-page");
    const title = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    title.textContent = "Contact Info!"
    p1.textContent = "Adresse: 20 rue Molière, 10000, Pole Nord";
    p2.textContent = "Tel : 20 30 40 50 60";
    p3.textContent = "Horaire: Ouvert tout les jours jusqu'à 13H00!"

    section.appendChild(title);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);

    main.appendChild(section);
}

export default createContactPage;