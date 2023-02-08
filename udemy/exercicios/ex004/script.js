var tela = document.getElementById('tela')
var n1 = 2
var n2 = 5

tela.innerText = `Os números ${n1} e ${n2} são maiores que 0? ${n1 && n2 > 0? 'SIM' : 'NÃO'}`
if(n1 == 5 || n2 == 5){
    tela.innerText += `\n ${n1} ou ${n2} é a 5? SIM`
}
else{
    tela.innerText += `\n ${n1} ou ${n2} é a 5? NÃO`
}
tela.innerText += `\n O número ${n1} é igual a 2? ${!(n1 === 2)? 'SIM' : 'NÃO'}`
