const tela = document.getElementById('tela')
const nome = window.prompt('Digite seu nome')

if(nome.toLocaleLowerCase() == 'marcos'){
    tela.innerText = 'Seja bem vindo, Marcos!'
}

console.log(nome)