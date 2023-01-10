const inputCriptografar = document.querySelector('.input-criptografar');
const inputDescriptografar = document.querySelector('.input-descriptografar');

function criptografar(textoCriptografado){
    let matrizCriptografada = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoCriptografado = textoCriptografado.toLowerCase();

    for(let i=0; i < matrizCriptografada.length; i++){
        if(textoCriptografado.includes(matrizCriptografada[i][0])){
            textoCriptografado = textoCriptografado.replaceAll(matrizCriptografada[i][0],matrizCriptografada[i][1]);
        }
    }
    return textoCriptografado;
}

const btnCriptografar = document.getElementById('btncriptografar');

btnCriptografar.addEventListener('click', function(){
    const textoE = criptografar(inputCriptografar.value);
    inputDescriptografar.value = textoE;
    btnCopiar.style.display = 'block';
    inputDescriptografar.style.backgroundImage = 'none';
});

function descriptografar(textoDescriptografado){
    let matrizDescriptografada = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]];
    textoDescriptografado = textoDescriptografado.toLowerCase();
   
   for(let i=0; i < matrizDescriptografada.length; i++){
        if(textoDescriptografado.includes(matrizDescriptografada[i][0])){
        textoDescriptografado = textoDescriptografado.replaceAll(matrizDescriptografada[i][0], matrizDescriptografada[i][1]);
       }
    }
    return textoDescriptografado;
}

const btnDescriptografar = document.getElementById('btndescriptografar');

btnDescriptografar.addEventListener('click', function(){
    const textoD = descriptografar(inputCriptografar.value);
    inputDescriptografar.value = textoD;
    inputDescriptografar.style.backgroundImage = 'none';
});

const btnCopiar = document.getElementById('btn-copiar');

btnCopiar.addEventListener('click', function(){
    navigator.clipboard.writeText(inputDescriptografar.value);
    inputDescriptografar.style.backgroundImage = '';
    btnCopiar.style.display = 'none';
    inputDescriptografar.value = '';
    inputCriptografar.value = '';
});