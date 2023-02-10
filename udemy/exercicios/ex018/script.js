const tela = document.getElementById('tela')

let num1 = Number(window.prompt('Digite um número'))
let num2 = Number(window.prompt('Digite outro número'))

function somar(x=0, y=0){
    let soma = x + y
    return soma
}

tela.innerText = `A soma vale ${somar(num1, num2)}`