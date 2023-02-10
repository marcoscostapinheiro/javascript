const tela = document.getElementById('tela')
let frase = window.prompt('Digite uma frase')

function verificarTexto(texto=''){
    if(texto.length > 10){
        tela.innerText = 'Texto muito longo'
    }
    else{
        tela.innerText = 'Texto está dentro do limite'
    }
}

verificarTexto(frase)
console.log(frase.length)
