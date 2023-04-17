let inputMensaje = document.querySelector("#mensaje");
let inputResultado = document.querySelector("#resultado");

let btnEncriptar = document.querySelector("#encriptar");
let btnDesencriptar = document.querySelector("#desencriptar");
let btncopiar = document.querySelector("#copiar");


function encriptar (){
    let texto = document.getElementById("mensaje")
    var mensaje = inputMensaje.value;
    var mensajeEncriptado =  mensaje
    
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai") 
    .replaceAll("u","ufat");

    inputResultado.value = mensajeEncriptado;
}
function desencriptar (){
    var encriptado = inputMensaje.value;
    var mensaje =  encriptado
    
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    

    inputResultado.value = mensaje;
}

function copiar(){
    let mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btncopiar.onclick = copiar;

