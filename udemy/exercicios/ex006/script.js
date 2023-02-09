let tela = document.getElementById('tela')
let idade = window.prompt('Digite sua idade')

if(idade < 18){
    tela.innerHTML += '<p>Você é menor de idade. A entrada só está liberada para maiores de 18 anos.</p>'
}
else{
    tela.innerHTML += '<p>Você é maior de idade. Você pode entrar.</p>'
}
