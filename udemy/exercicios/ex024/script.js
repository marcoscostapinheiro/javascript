const tela = document.getElementById('tela')
let base = Number(window.prompt('Digite a base'))
let pot = Number(window.prompt('Digite a potência'))

function potenciacao(b=0, p=0){
    return Math.pow(b, p)
}

tela.innerText = potenciacao(base, pot)