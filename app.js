const $ = (selector) => document.querySelector(selector);

// *****Elementos
const btnClaro = $(".modo-claro");
const main = $("main");
const header = $("header");
const modalImg = $("#form-img");
const btnImg = $(".btn-img");
const btnX = $(".btn-x");
const btnLi = $(".hover");
const contImg = $(".container-img");
const urlImg = $("#url-img");
const imgFiltros = $("#imgFiltros");
const colorP = $(".sexag"); 
const colorPtxt = $(".sexag-txt"); 
const colorPbg = $(".sexag-txt-bg"); 
const topT = $(".txt-top");
const botT =$(".txt-bottom");
const txtTopI = $("#top-text");
const txtBottomI = $("#bottom-text");
const fuente = $("#fuente");
const size = $("#font-size");
const btnNinguno = $(".btn-contorno-ninguno");
const btnContClaro = $(".btn-contorno-claro");
const btnOscuro = $(".btn-contorno-oscuro");
const btnCentrado = $("#centrado");
const btnIzquierda = $("#izquierda");
const btnDerecha = $("#derecha");
const espaciadoI = $("#espaciado");
const interlineadoA = $("#interlineadoA");
const interlineadoB = $("#interlineadoB");
const interlineadoC = $("#interlineadoC");
const interlineadoD = $("#interlineadoD");
const interlineadoE = $("#interlineadoE");
const interlineadoF = $("#interlineadoF");
// filtros
const opcionesImg = $("#option-color");
const brillo = $("#brillo");
const opacidad = $("#opacidad");
const contraste = $("#contraste");
const desenfoque = $("#desenfoque");
const grises = $("#grises");
const sepia = $("#sepia");
const hue = $("#hue");
const saturado = $("#saturado");
const negativo = $("#negativo");
const contTxtTop = $(".top-text");
const contTxtBottom = $(".bottom-text");
const circulo = $(".circulo");
const btnAbrir = $("#abrir-paleta");
const contPaleta = $("#cont-paleta-color");
const cancelar = $(".cancelar");
const colorElegido = $(".color-elegido")
const elegidoInputColor = $("#input-color");
const contInputColor = $(".cont-est-canc");
const divInputColor = $(".cont-input-color");
const btnEstablecer = $(".establecer");
const reestablecerF = $(".reestablecer-f");
const sinBg = $("#bg-transp");
const paleta = $(".paleta");
const red = $(".red");
const lBlue = $(".l-blue");
const blue = $(".blue");
const green = $(".green");
const pink = $(".pink");
const yellow = $(".yellow");
const black = $(".black");
const white = $(".white");
/********* */
const colorElegidoTxt = $(".color-elegido-txt");
const circuloTxt = $(".circulo-txt");
const elegidoInputColorTxt = $("#input-color-txt");
const btnAbrirTxt = $("#abrir-paleta-txt");
const contPaletaTxt = $("#cont-paleta-color-txt");
const cancelarTxt = $(".cancelar-txt");
const btnEstablecerTxt = $(".establecer-txt");
const divInputColorTxt = $(".cont-input-color-txt");
const txtTopNone = $("#txt-none");
const txtBottomNone = $("#txt-bottom-none");
const redTxt = $(".red-txt");
const lBlueTxt = $(".l-blue-txt");
const blueTxt = $(".blue-txt");
const greenTxt = $(".green-txt");
const pinkTxt = $(".pink-txt");
const yellowTxt = $(".yellow-txt");
const blackTxt = $(".black-txt");
const whiteTxt = $(".white-txt");
/****** */
const colorElegidoTxtBg = $(".color-elegido-txt-bg")
const circuloTxtBg = $(".circulo-txt-bg");
const elegidoInputColorTxtBg = $("#input-color-txt-bg");
const contPaletaBg = $("#cont-paleta-color-txt-bg");
const btnAbrirBg = $("#abrir-paleta-txt-bg");
const cancelarBg = $(".cancelar-txt-bg");
const btnEstablecerBg = $(".establecer-txt-bg");
const divInputColorBg = $(".cont-input-color-txt-Bg");
const redBg = $(".red-bg");
const lBlueBg = $(".l-blue-bg");
const blueBg = $(".blue-bg");
const greenBg = $(".green-bg");
const pinkBg = $(".pink-bg");
const yellowBg = $(".yellow-bg");
const blackBg = $(".black-bg");
const whiteBg = $(".white-bg");
const dowloand = $(".dowloand");
const containerImg = $(".container-img")
const btnTxt= $(".btn-txt")
const modalTxt = $("#form-txt")
const btnXtxt = $(".btn-x-txt")

/*---- --------FUNCIONES-------------*/

//modo claro/oscuro
const modo = () => {
    main.classList.toggle("modoClaro");
    header.classList.toggle("modoClaroHeader");
    
    if (btnClaro.innerText === "😎 Modo claro") {
        btnClaro.innerText = "🌚 Modo oscuro";
    }
    else {
        btnClaro.innerText = "😎 Modo claro"
    }
}
//opciones img
const aplicarModosImg = (e) =>{
    let opcionModo = e.target.value;
    console.log(opcionModo);
    imgFiltros.style.backgroundBlendMode= opcionModo
}
opcionesImg.addEventListener("click",aplicarModosImg);
//fuentes 
const aplicarFuente = (e) =>{
    fuenteAplicada = e.target.value;
    topT.style.fontFamily = fuenteAplicada;
    botT.style.fontFamily = fuenteAplicada;
    
}
//tamaño fuente
const aplicarTamaño = (e)=>{
    valorTamaño = size.value;
    topT.style.fontSize = `${valorTamaño}px`
    botT.style.fontSize = `${valorTamaño}px`
}

// color fondo img
const cambiarFondo = () => {
    let valorColorInput = elegidoInputColor.value;
    colorP.innerText = valorColorInput;
    colorElegido.style.backgroundColor = valorColorInput;
    circulo.style.backgroundColor = valorColorInput;
    contImg.style.backgroundColor = valorColorInput;
}
const cambiarFondoDiv = (color) => {
    colorP.innerText = color;
    colorElegido.style.backgroundColor = color
    circulo.style.backgroundColor = color
    contImg.style.backgroundColor = color
}

// color texto div
const cambiarColorTxt = (color) => {
    colorPtxt.innerText = color;
    colorElegidoTxt.style.backgroundColor = color
    circuloTxt.style.backgroundColor = color
    contTxtTop.style.color = color
    contTxtBottom.style.color = color
}

// color texto input
const cambiarColorTxtI = () => {
    console.log("funciona")
    let valorColorInputTxt = elegidoInputColorTxt.value;
    colorPtxt.innerText = valorColorInputTxt;
    console.log(valorColorInputTxt)
    colorElegidoTxt.backgroundcolor = valorColorInputTxt;
    circuloTxt.style.backgroundColor = valorColorInputTxt;
    contTxtBottom.style.color = valorColorInputTxt;
    contTxtTop.style.color = valorColorInputTxt;
}

//color fondo div
const cambiarColorBgTxt = (color) => {
    colorPbg.innerText = color;
    colorElegidoTxtBg.style.backgroundColor = color;
    circuloTxtBg.style.backgroundColor = color;
    contTxtTop.style.backgroundColor = color;
    contTxtBottom.style.backgroundColor = color;
}

//color fondo div input
const cambiarBgTxtI = () => {
    let valorColorInputTxtBg = elegidoInputColorTxtBg.value;
    colorPbg.innerText = valorColorInputTxtBg;
    colorElegidoTxtBg.style.backgroundColor = valorColorInputTxtBg;
    circuloTxtBg.style.backgroundColor = valorColorInputTxtBg;
    contTxtBottom.style.backgroundColor = valorColorInputTxtBg;
    contTxtTop.style.backgroundColor = valorColorInputTxtBg;
}

// insertar img
const actualizarImg = (e)=>{
    console.log(e.target.value)
    console.log(contImg)
    contImg.innerHTML=`
    <div class="style-img">
    <img class="style-img" id="imgFiltros" src="${e.target.value}" alt="">
    </div>`
}

//contorno texto
const sinContorno = ()=>{
    topT.classList.remove("contClaro");
    topT.classList.remove("contOscuro");
    botT.classList.remove("contClaro");
    botT.classList.remove("contOscuro")
}

const contornoClaro = () =>{
    topT.classList.add("contClaro");
    botT.classList.add("contClaro");
    topT.classList.remove("contOscuro");
    botT.classList.remove("contOscuro")
}

const contornoOscuro =  ()=>{
    botT.classList.add("contOscuro")
    topT.classList.add("contOscuro");
    topT.classList.remove("contClaro");
    botT.classList.remove("contClaro");
}

// fondo transparente

const transpFondo = () =>{
    if(sinBg.checked == true){
        contTxtTop.style.background = "transparent";
        contTxtBottom.style.background = "transparent";
    }
    else{
        contTxtTop.style.backgroundColor = colorPbg.innerText;
        contTxtBottom.style.backgroundColor=colorPbg.innerText;
    }
    
}
// filtros
const aplicarF = ( ) =>{
    let brilloV = brillo.value;
    let opacidadV = opacidad.value;
    let contrasteV = contraste.value;
    let desenfoqueV = desenfoque.value;
    let grisesV = grises.value;
    let  sepiaV = sepia.value;
    let hueV = hue.value;
    let saturadoV = saturado.value;
    let negativoV = negativo.value;
    // imgFiltros.style.filter = `brigthness(${brilloV}) opacity(${opacidadV}) contrast(${contrasteV}%) blur(${desenfoqueV}px) grayscale(${grisesV}%) sepia(${sepiaV}%) hue-rotate(${hueV}deg) saturate(${saturadoV}%) invert(${negativoV});`
} //me tira error rn style                     

// btn descarga
const dowloandMeme =  () =>{
    domtoimage.toBlob($('.container')).then(function(blob){
        saveAs(blob,"mi-meme.png");
    });
};

/******Eventos*****/

/*---- --------Modo claro/oscuro-------------*/
btnClaro.addEventListener("click", modo)


/*-----modal configuracion img---------*/

btnImg.addEventListener("click", () => {
    modalImg.classList.remove("close");
    modalImg.classList.add("open");
})

btnX.addEventListener("click", () => {
    modalImg.classList.add("close");
    modalImg.classList.remove("open");
})

/*****url imagen****** */
urlImg.addEventListener("input",actualizarImg)

//CONTAINER COLOR
btnAbrir.addEventListener("click", () => {
    contPaleta.classList.toggle("close");
    contPaleta.classList.toggle("open");
})

cancelar.addEventListener("click", () => {
    contPaleta.classList.add("close");
    contPaleta.classList.remove("open");
    cambiarFondoDiv("black");

})

btnEstablecer.addEventListener("click",()=>{
    contPaleta.classList.add("close");
    contPaleta.classList.remove("open");
})

reestablecerF.addEventListener("click",()=>{
    contImg.classList.add("reestablecerF");
})

//color texto
divInputColor.addEventListener("change", (e) => {
    cambiarFondo();
});

red.addEventListener("click", () => {
    cambiarFondoDiv("red");
})

lBlue.addEventListener("click", () => {
    cambiarFondoDiv("lightskyblue");
})

blue.addEventListener("click", () => {
    cambiarFondoDiv("blue");
})

green.addEventListener("click", () => {
    cambiarFondoDiv("green");
})

pink.addEventListener("click", () => {
    cambiarFondoDiv("pink");
})

yellow.addEventListener("click", () => {
    cambiarFondoDiv("yellow");
})

black.addEventListener("click", () => {
    cambiarFondoDiv("black");
})

white.addEventListener("click", () => {
    cambiarFondoDiv("white");
})

/***********Dowloand********/
dowloand.addEventListener("click",dowloandMeme)


/*-----modal configuracion txt---------*/

btnTxt.addEventListener("click", () => {
    modalTxt.classList.remove("close");
    modalTxt.classList.add("open");
});

btnXtxt.addEventListener("click", () => {
    modalTxt.classList.add("close");
    modalTxt.classList.remove("open");
});

btnAbrirTxt.addEventListener("click", () => {
    contPaletaTxt.classList.toggle("close");
    contPaletaTxt.classList.toggle("open");
})

cancelarTxt.addEventListener("click", () => {
    contPaletaTxt.classList.add("close");
    contPaletaTxt.classList.remove("open");
    cambiarColorTxt("black");

})

btnEstablecerTxt.addEventListener("click",()=>{
    contPaletaTxt.classList.add("close");
    contPaletaTxt.classList.remove("open");
})

/*******color text******** */

btnAbrirBg.addEventListener("click", () => {
    contPaletaBg.classList.toggle("close");
    contPaletaBg.classList.toggle("open");
})

cancelarBg.addEventListener("click", () => {
    contPaletaBg.classList.add("close");
    contPaletaBg.classList.remove("open");
    cambiarColorBgTxt("white");
})

btnEstablecerBg.addEventListener("click",()=>{
    contPaletaBg.classList.add("close");
    contPaletaBg.classList.remove("open");
})

/*colores txt*/

divInputColorTxt.addEventListener("change", cambiarColorTxtI);

redTxt.addEventListener("click", () => {
    cambiarColorTxt("red");
})

lBlueTxt.addEventListener("click", () => {
    cambiarColorTxt("lightskyblue");
})

blueTxt.addEventListener("click", () => {
    cambiarColorTxt("blue");
})

greenTxt.addEventListener("click", () => {
    cambiarColorTxt("green");
})

pinkTxt.addEventListener("click", () => {
    cambiarColorTxt("pink");
})

yellowTxt.addEventListener("click", () => {
    cambiarColorTxt("yellow");
})

blackTxt.addEventListener("click", () => {
    cambiarColorTxt("black");
})

whiteTxt.addEventListener("click", () => {
    cambiarColorTxt("white");
})

/*color bg*/

elegidoInputColorTxtBg.addEventListener("change", cambiarBgTxtI);

redBg.addEventListener("click", () => {
    cambiarColorBgTxt("red");
})

lBlueBg.addEventListener("click", () => {
    cambiarColorBgTxt("lightskyblue");
})

blueBg.addEventListener("click", () => {
    cambiarColorBgTxt("blue");
})

greenBg.addEventListener("click", () => {
    cambiarColorBgTxt("green");
})

pinkBg.addEventListener("click", () => {
    cambiarColorBgTxt("pink");
})

yellowBg.addEventListener("click", () => {
    cambiarColorBgTxt("yellow");
})

blackBg.addEventListener("click", () => {
    cambiarColorBgTxt("black");
})

whiteBg.addEventListener("click", () => {
    cambiarColorBgTxt("white");
})

// textos meme
txtTopI.addEventListener("input", (e) =>{
    
    topT.innerText = e.target.value;
});

txtBottomI.addEventListener("input", (e) =>{
    botT.innerText = e.target.value;
    console.log(txtBottomI.value)
});

// textos ocultos 
txtTopNone.addEventListener("click", ()=>{
    contTxtTop.classList.toggle("close");
})

txtBottomNone.addEventListener("click", ()=>{
    contTxtBottom.classList.toggle("close")
 })

//fondo transparente
sinBg.addEventListener("click",transpFondo)

//fuentes
fuente.addEventListener("click",aplicarFuente)

size.addEventListener("click",aplicarTamaño)

//contorno fuentes
btnNinguno.addEventListener("click", sinContorno)

btnContClaro.addEventListener("click", contornoClaro);

btnOscuro.addEventListener("click",contornoOscuro);

//alinacion texto
btnCentrado.addEventListener("click",()=>{
    topT.style.textAlign="center";
    botT.style.textAlign="center";
});

btnIzquierda.addEventListener("click",()=>{
    topT.style.textAlign="left";
    botT.style.textAlign="left";

});

btnDerecha.addEventListener("click",()=>{
    topT.style.textAlign="right";
    botT.style.textAlign="right";
});

//espaciado 
espaciadoI.addEventListener("change", (e)=>{
    let valorEspaciado = espaciadoI.value;
    topT.style.letterSpacing = `${valorEspaciado}px`;
    botT.style.letterSpacing = `${valorEspaciado}px`;
});

//interlineado
const interl = (e) =>{

    const valorInter = e.target.value;
    console.log(valorInter)
    txtTopI.style.lineHeight = valorInter;
}

interlineadoA.addEventListener("click",interl);
interlineadoB.addEventListener("click",interl);
interlineadoC.addEventListener("click",interl);
interlineadoD.addEventListener("click",interl);
interlineadoE.addEventListener("click",interl);
interlineadoF.addEventListener("click",interl);

// filtros
brillo.addEventListener("change",()=>{
    contImg.classList.remove("reestablecerF");
    aplicarF()
    console.log(brillo.value)
    console.log(contImg)

}); //aplico remove o no?????

opacidad.addEventListener("change",aplicarF);
contraste.addEventListener("change",aplicarF);
desenfoque.addEventListener("change",aplicarF);
grises.addEventListener("change",aplicarF);
sepia.addEventListener("change",aplicarF);
hue.addEventListener("change",aplicarF);
saturado.addEventListener("change",aplicarF);
negativo.addEventListener("change",aplicarF);
