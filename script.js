const textoEntrada = document.querySelector(".texto-entrada");
const textoSalida = document.querySelector(".texto-salida");
const parrafo = document.querySelector(".text-i");
const btnCopiar = document.querySelector(".copiar");

function numText(string){
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyz1234567890., ';
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
	     out += string.charAt(i);
    return out;
}    

function btnEncriptar(){
    const textoEncriptado = encriptar(textoEntrada.value);
    textoSalida.value = textoEncriptado;
    textoEntrada.value = "";
    if(textoSalida.value != ""){
        textoSalida.style.backgroundImage = "none", parrafo.style.display= "none", btnCopiar.style.visibility= "visible";
    }
    else{
        textoSalida.style.backgroundImage = "revert-layer", parrafo.style.display= "revert-layer", btnCopiar.style.visibility= "hidden";
    }
}

function encriptar(stringEncriptada){
    let condicionesEncriptador = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < condicionesEncriptador.length; i++){
        if(stringEncriptada.includes(condicionesEncriptador[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(condicionesEncriptador[i][0],condicionesEncriptador[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textoEntrada.value);
    textoSalida.value = textoEncriptado;
    textoEntrada.value = "";
    if(textoSalida.value != ""){
        textoSalida.style.backgroundImage = "none", parrafo.style.display= "none", btnCopiar.style.visibility= "visible";
    }
    else{
        textoSalida.style.backgroundImage = "revert-layer", parrafo.style.display= "revert-layer", btnCopiar.style.visibility= "hidden";
    }
}

function desencriptar(stringDesencriptada){
    let condicionesEncriptador = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < condicionesEncriptador.length; i++){
        if(stringDesencriptada.includes(condicionesEncriptador[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(condicionesEncriptador[i][1], condicionesEncriptador[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    const texto = document.getElementById("resultado");
    texto.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

