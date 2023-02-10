const tela = document.getElementById('tela')

function verificarPar(){
    let ini = Number(window.prompt('Digite o número inicial da contagem'))
    let fim = Number(window.prompt('Digite o número final'))
    if(ini < fim){
        for(ini; ini <= fim; ini++){
            if(ini % 2 === 0){
                tela.innerText += `\n O valor ${ini} é par`
            }
        }
    }
    else{
        for(ini; ini >= fim; ini--){
            if(ini % 2 === 0){
                tela.innerText += `\n O valor ${ini} é par`
            }
        }
    }
}

verificarPar()