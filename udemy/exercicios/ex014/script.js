const tela = document.getElementById('tela')

for(let i = 0; i <= 50; i++){
    if(i % 2 == 0){
        tela.innerText += `\n O número ${i} é par.`
    }
    else{
        tela.innerText += `\n O número ${i} é ímpar.`
    }
}

