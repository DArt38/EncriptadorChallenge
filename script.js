const inputMensaje = document.querySelector(".input-mensaje");
const outputMensaje = document.querySelector(".output-mensaje");
const perrito = document.querySelector(".img-esperando")

function btnEncriptar(){

    if(encriptar(inputMensaje.value) == "" ){
        perrito.style.visibility = "visible";
    }
    else{
        const textoEncriptado = encriptar(inputMensaje.value)
        outputMensaje.value = textoEncriptado
        perrito.style.visibility = "hidden";
        inputMensaje.value = "";
    }
    
}

function btnDesencriptar(){

    if(desencriptar(inputMensaje.value) == ""){
        perrito.style.visibility = "visible";
    }
    else{
        const textoDesencriptado = desencriptar(inputMensaje.value)
        outputMensaje.value = textoDesencriptado
        perrito.style.visibility = "hidden";
        inputMensaje.value = "";
    }
   
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}


function desencriptar(stringDesencriptado){
    let mattrizCodigo =  [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < mattrizCodigo.length; i++){
        if(stringDesencriptado.includes(mattrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(mattrizCodigo[i][1],mattrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}


function copiarTexto() {
    
    var texto = document.getElementById("myInput");
  
    // Select the text field
    texto.select();
    texto.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(texto.value);
    
    // Alert the copied text
    mostrarAlerta()
    outputMensaje.value = "";
    perrito.style.visibility = "visible";
    
}

function mostrarAlerta() {
    swal({
        text:"Texto copiado al portapapeles",
        icon: "success",
        button: "OK",
    });
}




