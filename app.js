const $ = (selector) => document.querySelector(selector);

// *****Elementos
const btnClaro = $(".modo-claro");
const main = $("main");
const header =$("header");
const modalImg =$(".form-img"); 
const btnImg = $(".btn-img");
const btnX  =$("btn-x")
console.log(modalImg)
console.log(btnImg)
/******Eventos*****/

/*---- --------Modo claro/oscuro-------------*/

btnClaro.addEventListener("click", ()=>{

    main.classList.toggle("modoClaro");
    header.classList.toggle("modoClaroHeader");
     
    if(btnClaro.innerText==="😎 Modo claro"){
        btnClaro.innerText="🌚 Modo oscuro";

    }
    else{
        btnClaro.innerText="😎 Modo claro"
    }
})

/*-----modal configuracion img---------*/

btnImg.addEventListener("click", ()=>{
    modalImg.classList.remove("close");
    modalImg.classList.add("open");
    console.log(modalImg)
    console.log(btnImg)
})

btnX.addEventListener("click", ()=>{
    modalImg.classList.add("close");
    modalImg.classList.remove("open");

})
