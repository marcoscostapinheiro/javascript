var tela = document.getElementById('tela')
var num = 2

tela.innerText = `${num} é maior que 0? ${num > 0? 'SIM' : 'NÃO'}`
tela.innerText += `\n ${num} é menor ou igual a 0? ${num <= 0? 'SIM' : 'NÃO'}`
tela.innerText += `\n ${num} é diferente de 0? ${num !== 0? 'SIM' : 'NÃO'}`
