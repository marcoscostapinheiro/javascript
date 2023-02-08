var numeros = []
function adicionar(){
    var txtnum = document.getElementById('inum')
    var num = Number(txtnum.value)
    document.getElementById('res').innerHTML = ''
    if (num.length != 0 && num >= 1 && num <= 100){
        var campo = document.getElementById('campo')
        campo.innerHTML += `<p>Valor ${num} adicionado</p>`
        campo.style.border = '1px solid black'
        document.getElementById('botao').style.display = 'block'
        numeros.push(num)
    }
    else{
        window.alert('Número inválido! Digite um número válido.')
    }
}

function finalizar(){
    var res = document.getElementById('res')
    var maior = numeros[0]
    var menor = numeros[0]
    var soma = 0
    document.getElementById('botao').style.display = 'none'
    res.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados</p>`
    for (var pos in numeros){
        soma += numeros[pos]
        if (numeros[pos] > maior){
            maior = numeros[pos]
        }
        if (numeros[pos] < menor){
            menor = numeros[pos]
        }
    }
    res.innerHTML += `<p>O maior valor informado é ${maior}`
    res.innerHTML += `<p>O menor valor informado é ${menor}`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}`
    var med = soma / numeros.length
    res.innerHTML += `<p>A média dos valores digitados é ${med}`
}