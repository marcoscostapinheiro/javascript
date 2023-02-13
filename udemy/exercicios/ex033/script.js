const tela = document.getElementById('tela')

let pessoa = {
    "Nome": "Marcos",
    "Idade": 18,
    "Ocupação": "Programador"
}

tela.innerText = pessoa.Nome
tela.innerText += `\n ${pessoa.Idade}`
tela.innerText += `\n ${pessoa.Ocupação}`


