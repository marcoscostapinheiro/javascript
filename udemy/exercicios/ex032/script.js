const tela = document.getElementById('tela')

let nomes = [
    'Marcos',
    'Lucas',
    'Samilly',
    'Tiao',
    'Rosemary',
]

for(let i in nomes){
    tela.innerText += `\n ${nomes[i]}`
}



