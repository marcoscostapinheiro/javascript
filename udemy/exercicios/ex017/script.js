const tela = document.getElementById('tela')

let idade = window.prompt('Digite sua idade')

function verificarIdade(x){
    tela.innerText = `Você tem ${x} anos`
}

verificarIdade(idade)