const tela = document.getElementById('tela')

const calculadora = {
    somar: function adicao(n1=0, n2=0){
        return n1 + n2
    },
    subtrair: function subtracao(n1=0, n2=0){
        return n1 - n2
    },
    multiplicar: function multiplicacao(n1=0, n2=0){
        return n1 * n2
    },
    dividir: function divisao(n1=0, n2=0){
        return n1 / n2
    }
}

tela.innerText = calculadora.somar(5, 2)
tela.innerText += `\n ${calculadora.subtrair(7, 3)}`
tela.innerText += `\n ${calculadora.multiplicar(5, 3)}`
tela.innerText += `\n ${calculadora.dividir(10, 5)}`


