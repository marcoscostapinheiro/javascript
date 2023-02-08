function contar(){
    var txtini = document.getElementById('iini')
    var ini = Number(txtini.value)
    var txtfim = document.getElementById('ifim')
    var fim = Number(txtfim.value)
    var txtpasso = document.getElementById('ipass')
    var passo = Number(txtpasso.value)
    document.getElementById('res').innerHTML = '<p>Contando:</p>'
    if (passo < 0){
        passo *= -1
    }

    if (ini < fim){
        for (var c = ini; c <= fim; c += passo){
        document.getElementById('res').innerHTML += c
        document.getElementById('res').innerHTML += '☛'
        }
    }
    else if (ini > fim){
        for (var c = ini; c >= fim; c -= passo){
        document.getElementById('res').innerHTML += c
        document.getElementById('res').innerHTML += '☛'
        }
    }
    document.getElementById('res').innerHTML += 'FIM'
}