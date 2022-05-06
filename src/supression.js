// create a cummon function for deleting the main part of the page

function clearMain(){
    const main = document.querySelector(".main");
    const arr = [...main.children];
    console.log(arr)
    arr.forEach(e=>{
        main.removeChild(e)
    });
}

export default clearMain;