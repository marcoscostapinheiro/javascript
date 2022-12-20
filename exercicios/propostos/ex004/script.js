function tabuada(){
    var txtnum = document.getElementById('inum')
    var num = Number(txtnum.value)
    document.getElementById('res').innerHTML = ''
    if (txtnum.value == ''){
        window.alert('Digite um número, por favor!')
    }
    else{
        for (var c = 1; c <= 10; c++){
            document.getElementById('res').innerHTML += `<p>${num} x ${c} = ${num*c}</p>`
        }
    }
    
}