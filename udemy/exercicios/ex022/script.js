const tela = document.getElementById('tela')
let num = Number(window.prompt('Digite um número negativo'))

function reverseNumber(x){
    return Math.abs(x)
}

tela.innerText = reverseNumber(num)

