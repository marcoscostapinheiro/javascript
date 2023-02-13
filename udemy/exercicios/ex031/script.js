const tela = document.getElementById('tela')

let nomes = [
    'Marcos',
    'Lucas',
    'Samilly',
    'Tiao',
    'Rosemary',
    'Matheus'
]

let nomes2 = [
    'Gustavo',
    'Alan',
    'Gabriel',
]

function verficarTamanho(){
    if(nomes.length > 5){
        tela.innerText = 'Array muito grande'
    }
    else{
        tela.innerText = 'Array pequena'
    }
    if(nomes2.length > 5){
        tela.innerText += `\n Array muito grande`
    }
    else{
        tela.innerText += `\n Array pequena`
    }
}

verficarTamanho()


