const tela = document.getElementById('tela')
const vel = window.prompt('Velocidade em km/h')

tela.innerText = 'Limite de velocidade permitida: 80km/h.'

if(vel > 80){
    tela.innerText += '\n Você ultrapassou o limite.'
}
else{
    tela.innerText += '\n Você se manteve dentro do limite permitido. Parabéns!'
}