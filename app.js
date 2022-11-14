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
let imgFiltros;
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
const colorElegidoTxtBg = $(".color-elegido-txt-bg");
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
const containerImg = $(".container-img");
const btnTxt= $(".btn-txt");
const modalTxt = $("#form-txt");
const btnXtxt = $(".btn-x-txt");

/*---- --------FUNCIONES-------------*/

//modo claro/oscuro
const modo = () => {
    main.classList.toggle("modoClaro");
    header.classList.toggle("modoClaroHeader");
    
    if (btnClaro.innerText === "😎 Modo claro") {
        btnClaro.innerText = "🌚 Modo oscuro";
    }
    else {
        btnClaro.innerText = "😎 Modo claro";
    }
}

/*-----modal configuracion img---------*/
const cerrarModalImg = () => {
    modalImg.classList.toggle("close");
    modalImg.classList.toggle("open");
}

const abrirModalImg = () => {
    modalImg.classList.toggle("close");
    modalImg.classList.toggle("open");
    modalImg.classList.toggle("zIndex");
}

//fuentes 
const aplicarFuente = (e) =>{
    fuenteAplicada = e.target.value;
    topT.style.fontFamily = fuenteAplicada;
    botT.style.fontFamily = fuenteAplicada;
}
    
//tamaño fuente
const aplicarTamaño = (e)=>{
    valorTamaño = size.value;
    topT.style.fontSize = `${valorTamaño}px`;
    botT.style.fontSize = `${valorTamaño}px`;
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
    colorElegido.style.backgroundColor = color;
    circulo.style.backgroundColor = color;
    contImg.style.backgroundColor = color;
}

// color texto div
const cambiarColorTxt = (color) => {
    colorPtxt.innerText = color;
    colorElegidoTxt.style.backgroundColor = color;
    circuloTxt.style.backgroundColor = color;
    contTxtTop.style.color = color;
    contTxtBottom.style.color = color;
}

// color texto input
const cambiarColorTxtI = () => {
    let valorColorInputTxt = elegidoInputColorTxt.value;
    colorPtxt.innerText = valorColorInputTxt;
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
    contImg.innerHTML=`
    <div class="style-img">
    <img class="style-img" id="imgFiltros" src="${e.target.value}" alt="">
    </div>`;
}

/*-----modal configuracion txt---------*/
const abrirmodalTxt =() => {
    modalTxt.classList.toggle("close");
    modalTxt.classList.toggle("open");
}
const xTxt = () => {
    modalTxt.classList.toggle("close");
    modalTxt.classList.toggle("open");
}
const abrirTxt = () => {
    contPaletaTxt.classList.toggle("close");
    contPaletaTxt.classList.toggle("open");
}

const cancelarTxT =() => {
    contPaletaTxt.classList.add("close");
    contPaletaTxt.classList.remove("open");
    cambiarColorTxt("black");
}

const establecerTXT =()=>{
    contPaletaTxt.classList.add("close");
    contPaletaTxt.classList.remove("open");
}

//contorno texto
const sinContorno = ()=>{
    topT.classList.remove("contClaro");
    topT.classList.remove("contOscuro");
    botT.classList.remove("contClaro");
    botT.classList.remove("contOscuro");
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
    imgFiltros= $("#imgFiltros");
    imgFiltros.style.filter =
        `brightness(${brilloV}) 
        opacity(${opacidadV})  
        contrast(${contrasteV}%) 
        blur(${desenfoqueV}px) 
        grayscale(${grisesV}%) 
        sepia(${sepiaV}%) 
        hue-rotate(${hueV}deg) 
        saturate(${saturadoV}%) 
        invert(${negativoV})`;
}                 
// menú opciones fondo
const aplicarModos = (e) =>{
    imgFiltros= $("#imgFiltros");
    let opcionModo = e.target.value;
    imgFiltros.style.backgroundBlendMode = opcionModo;
}

//restablecer filtros
const restFiltros = ()=>{
    brillo.value = 1;
    opacidad.value = 1;
    contraste.value = 100; 
    desenfoque.value = 0;
    grises.value = 0;
    sepia.value = 0;
    hue.value =0;
    saturado.value = 100; 
    negativo.value = 0;
    aplicarF(); 
}

// modal colores
const abrirPaleta = () => {
    contPaletaBg.classList.toggle("close");
    contPaletaBg.classList.toggle("open");
}

const cancelarBG = () => {
    contPaletaBg.classList.add("close");
    contPaletaBg.classList.remove("open");
    cambiarColorBgTxt("white");
}

const establecerBG = ()=>{
    contPaletaBg.classList.add("close");
    contPaletaBg.classList.remove("open");
}

//CONTAINER COLOR
const abrirColor = () => {
    contPaleta.classList.toggle("close");
    contPaleta.classList.toggle("open");
}

const cancelarColor = () => {
    contPaleta.classList.add("close");
    contPaleta.classList.remove("open");
    cambiarFondoDiv("black");
}

const estabColor = ()=>{
    contPaleta.classList.add("close");
    contPaleta.classList.remove("open");
}

//espaciado 
const espaciar = () =>{
    let valorEspaciado = espaciadoI.value;
    topT.style.letterSpacing = `${valorEspaciado}px`;
    botT.style.letterSpacing = `${valorEspaciado}px`;
}

// textos meme
const insertTxtT = (e) =>{
    topT.innerText = e.target.value;
}

const inserttxtB = (e) =>{
    botT.innerText = e.target.value;
}
// textos ocultos 
const ocultarTxtT =()=>{
    contTxtTop.classList.toggle("close");
}

const ocultarTxtB = ()=>{
    contTxtBottom.classList.toggle("close");
}

//alineacion texto
const centrar = ()=>{
    topT.style.textAlign="center";
    botT.style.textAlign="center";
}

const alinearIzquierda = ()=>{
    topT.style.textAlign="left";
    botT.style.textAlign="left";
}

const alinearDerecha = ()=>{
    topT.style.textAlign="right";
    botT.style.textAlign="right";
}

//interlineado
const interl = (e) =>{
    const valorInter = e.target.value;
    txtTopI.style.lineHeight = valorInter;
}

// btn descarga
const dowloandMeme =  () =>{
    domtoimage.toBlob($('.container')).then(function(blob){
        saveAs(blob,"mi-meme.png");
    });
}

/****************Eventos************************/

/*---- --------Modo claro/oscuro-------------*/
btnClaro.addEventListener("click", modo);

/*-----modal configuracion img---------*/
btnX.addEventListener("click", abrirModalImg);
btnImg.addEventListener("click", cerrarModalImg);

/*****url imagen****** */
urlImg.addEventListener("input",actualizarImg);

//CONTAINER COLOR
btnAbrir.addEventListener("click", abrirColor);
cancelar.addEventListener("click", cancelarColor);
btnEstablecer.addEventListener("click",estabColor);

//restablecer filtros
reestablecerF.addEventListener("click", restFiltros);

//color texto
divInputColor.addEventListener("change", (e) => {
    cambiarFondo();
});

red.addEventListener("click", () => {
    cambiarFondoDiv("red");
});

lBlue.addEventListener("click", () => {
    cambiarFondoDiv("lightskyblue");
});

blue.addEventListener("click", () => {
    cambiarFondoDiv("blue");
});

green.addEventListener("click", () => {
    cambiarFondoDiv("green");
});

pink.addEventListener("click", () => {
    cambiarFondoDiv("pink");
});

yellow.addEventListener("click", () => {
    cambiarFondoDiv("yellow");
});

black.addEventListener("click", () => {
    cambiarFondoDiv("black");
});

white.addEventListener("click", () => {
    cambiarFondoDiv("white");
});

/***********Dowloand********/
dowloand.addEventListener("click",dowloandMeme);

/*-----modal configuracion txt---------*/
btnTxt.addEventListener("click", abrirmodalTxt);
btnXtxt.addEventListener("click", xTxt);
cancelarTxt.addEventListener("click", cancelarTxT);
btnAbrirTxt.addEventListener("click", abrirTxt);
btnEstablecerTxt.addEventListener("click",establecerTXT);

/*******color text******** */


btnAbrirBg.addEventListener("click", abrirPaleta);
cancelarBg.addEventListener("click", cancelarBG);
btnEstablecerBg.addEventListener("click",establecerBG);

/*colores txt*/

divInputColorTxt.addEventListener("change", cambiarColorTxtI);

redTxt.addEventListener("click", () => {
    cambiarColorTxt("red");
});

lBlueTxt.addEventListener("click", () => {
    cambiarColorTxt("lightskyblue");
});

blueTxt.addEventListener("click", () => {
    cambiarColorTxt("blue");
});

greenTxt.addEventListener("click", () => {
    cambiarColorTxt("green");
});

pinkTxt.addEventListener("click", () => {
    cambiarColorTxt("pink");
});

yellowTxt.addEventListener("click", () => {
    cambiarColorTxt("yellow");
});

blackTxt.addEventListener("click", () => {
    cambiarColorTxt("black");
});

whiteTxt.addEventListener("click", () => {
    cambiarColorTxt("white");
});

/*color bg*/

elegidoInputColorTxtBg.addEventListener("change", cambiarBgTxtI);

redBg.addEventListener("click", () => {
    cambiarColorBgTxt("red");
});

lBlueBg.addEventListener("click", () => {
    cambiarColorBgTxt("lightskyblue");
});

blueBg.addEventListener("click", () => {
    cambiarColorBgTxt("blue");
});

greenBg.addEventListener("click", () => {
    cambiarColorBgTxt("green");
});

pinkBg.addEventListener("click", () => {
    cambiarColorBgTxt("pink");
});

yellowBg.addEventListener("click", () => {
    cambiarColorBgTxt("yellow");
});

blackBg.addEventListener("click", () => {
    cambiarColorBgTxt("black");
});

whiteBg.addEventListener("click", () => {
    cambiarColorBgTxt("white");
});

// textos meme
txtTopI.addEventListener("input", insertTxtT);
txtBottomI.addEventListener("input", inserttxtB);

// textos ocultos 
txtTopNone.addEventListener("click", ocultarTxtT);
txtBottomNone.addEventListener("click", ocultarTxtB);

//fondo transparente
sinBg.addEventListener("click",transpFondo);

//fuentes
fuente.addEventListener("click",aplicarFuente);
size.addEventListener("click",aplicarTamaño);

//contorno fuentes
btnNinguno.addEventListener("click", sinContorno);
btnContClaro.addEventListener("click", contornoClaro);
btnOscuro.addEventListener("click",contornoOscuro);

//alineacion texto
btnCentrado.addEventListener("click", centrar);
btnIzquierda.addEventListener("click", alinearIzquierda);
btnDerecha.addEventListener("click", alinearDerecha);

//espaciado 
espaciadoI.addEventListener("change",espaciar);

//interlineado
interlineadoA.addEventListener("click",interl);
interlineadoB.addEventListener("click",interl);
interlineadoC.addEventListener("click",interl);
interlineadoD.addEventListener("click",interl);
interlineadoE.addEventListener("click",interl);
interlineadoF.addEventListener("click",interl);

// filtros
brillo.addEventListener("change", aplicarF);
opacidad.addEventListener("change", aplicarF);
contraste.addEventListener("change", aplicarF);
desenfoque.addEventListener("change", aplicarF);
grises.addEventListener("change", aplicarF);
sepia.addEventListener("change", aplicarF);
hue.addEventListener("change", aplicarF);
saturado.addEventListener("change", aplicarF);
negativo.addEventListener("change", aplicarF);

// menú opciones fondo
opcionesImg.addEventListener("change", aplicarModos);