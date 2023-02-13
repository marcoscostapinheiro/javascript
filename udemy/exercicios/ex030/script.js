const tela = document.getElementById('tela')

let nomes = [
    'Marcos',
    'Lucas',
    'Samilly',
    'Tiao',
    'Rosemary'
]

for(let i in nomes){
    if(nomes[i] == 'Marcos'){
        tela.innerText = `Olá, ${nomes[i]}!`
    }
}
