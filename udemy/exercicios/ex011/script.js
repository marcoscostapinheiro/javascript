const tela = document.getElementById('tela')
const nome = window.prompt('Digite seu nome')
const idade = window.prompt('Digite sua idade')
const cnh = window.prompt('Possui CNH(Carteira Nacional de Habilitação)?')

tela.innerText = `Nome: ${nome}`
tela.innerText += `\n Idade: ${idade}`
tela.innerText += `\n Possui CNH: ${cnh}`

if(idade >= 18 && cnh.toLowerCase() == 'sim'){
    tela.innerText += '\n Está apto a dirigir.'
}
else if(idade >= 18 && cnh.toLowerCase() == 'nao'){
    tela.innerText += '\n Não está apto a dirigir. Falta tirar a CNH'
}
else{
    tela.innerText += '\n Não está apto a dirigir. Você é menor de idade.'
}

