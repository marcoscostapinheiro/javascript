const tela = document.getElementById('tela')
let x = 'Marcos'
let y = 18
let z = false

function verificarTipo(){
    tela.innerText = `A variável x é um(a) ${typeof(x)}`
    tela.innerText += `\n A variável y é um(a) ${typeof(y)}`
    tela.innerText += `\n A variável z é um(a) ${typeof(z)}`
}

verificarTipo()

