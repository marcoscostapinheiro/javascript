const tela = document.getElementById('tela')
const num = window.prompt('Digite um número')

if(num > 2 && num % 2 === 0 || num % 3 === 0 || num % 5 === 0){
    tela.innerText = `O número ${num} não é um número primo`
}
else{
    tela.innerText = `O número ${num} é um número primo`
}


