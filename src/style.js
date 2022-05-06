// make the nav shit look good


 const pageActive=(obj)=>{
    const nav = [...document.querySelector("nav").children] 
    nav.forEach(e=>{e.classList.remove("active")})
    /* obj.toggle("active"); */
    obj.classList.add("active")
}

export default pageActive;