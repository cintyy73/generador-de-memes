const $ = (selector) => document.querySelector(selector);

// *****Elementos
const btnClaro = $(".modo-claro");
const main = $("main");
const header = $("header");
const modalImg = $(".form-img");
const btnImg = $(".btn-img");
const btnX  =$(".btn-x");

const contPaleta = $("#cont-paleta-color");
console.log(contPaleta)
const color = $(".color");

const cancelar = $(".cancelar");
console.log(cancelar)


// console.log(modalImg)
// console.log(btnImg)
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

})

btnX.addEventListener("click", ()=>{
    modalImg.classList.add("close");
    modalImg.classList.remove("open");

})

color.addEventListener("click", ()=>{
    contPaleta.classList.remove("close");
    contPaleta.classList.add("open");
})

cancelar.addEventListener("click", ()=>{
    contPaleta.classList.add("close");
    contPaleta.classList.remove("open");

})