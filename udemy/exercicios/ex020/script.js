const tela = document.getElementById('tela')

function verificarIdade(){
    let idade = Number(window.prompt('Digite sua idade'))
    if(idade >= 18){
        tela.innerText = `Você tem ${idade} anos e pode tirar sua CNH.`
    }
    else{
        tela.innerText = `Você é tem ${idade} anos e não pode tirar a CNH.`
    }
}

verificarIdade()

