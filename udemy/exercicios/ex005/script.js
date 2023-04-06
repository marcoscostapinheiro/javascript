const resp = document.getElementById('resp')

function verifyImc(){
    let peso = Number(prompt('Digite seu peso(em kg)'))
    let altura = Number(prompt('Digite sua altura(em metros)'))
    let imc = peso / altura ** 2
    let op = document.getElementsByClassName('op')

    for(let item = 0; item < 4; item++){
        op[item].style.backgroundColor = 'rgb(219, 218, 218)'
    }

    resp.innerHTML = `<p><strong>IMC:</strong> ${imc.toFixed(2)}</p>`

    if(imc < 18.5){
        op[0].style.backgroundColor = 'lightgreen'
    }

    else if(imc < 24.9){
        op[1].style.backgroundColor = 'lightgreen'
    }

    else if(imc < 29.9){
        op[2].style.backgroundColor = 'lightgreen'
    }

    else if(imc < 39.9){
        op[3].style.backgroundColor = 'lightgreen'
    }

    else{
        op[4].style.backgroundColor = 'lightgreen'
    }
}