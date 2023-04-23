let inputMensaje = document.querySelector("#mensaje");
let inputResultado = document.querySelector("#resultado");
let btnEncriptar = document.querySelector("#encriptar");
let btnDesencriptar = document.querySelector("#desencriptar");
let btncopiar = document.querySelector("#copiar");


function encriptar (){
    
    let texto = document.getElementById("mensaje")
    let mensaje = inputMensaje.value;
    let mensajeEncriptado =  mensaje.toLowerCase()
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai") 
    .replaceAll("u","ufat");

    document.getElementById("contenedor-2-inicio","imagen").style.visibility = "hidden";
    document.getElementById("contenedor-3").style.visibility = "visible";
    inputResultado.value = mensajeEncriptado;
    document.getElementById("mensaje").value = "";
    
   
}

function desencriptar (){
    let encriptado = inputMensaje.value;
     mensaje =  encriptado.toLowerCase()
    
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    inputResultado.value = mensaje;
    document.getElementById("contenedor-2-inicio","imagen").style.visibility = "hidden";
    document.getElementById("contenedor-3").style.visibility = "visible";
    document.getElementById("mensaje").value = "";
   
   
}
 

function copiar(){
    let mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btncopiar.onclick = copiar;