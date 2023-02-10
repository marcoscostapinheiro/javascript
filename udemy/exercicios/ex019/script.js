const tela = document.getElementById('tela')
let min = Number(window.prompt('Digite o número mínimo'))
let max = Number(window.prompt('Digite o número máximo'))

function randomNumber(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + 1
}

tela.innerText = randomNumber(min, max)


