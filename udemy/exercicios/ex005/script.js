const resp = document.getElementById('resp')
let peso = Number(prompt('Digite seu peso'))
let altura = Number(prompt('Digite sua altura(em metros)'))
var imc = peso / altura ** 2
console.log(imc)

function verifyImc(){
    if(imc < 18.5){
        resp.innerText = `Seu IMC é de ${imc.toFixed(2)}. Abaixo do peso.`
    }

    else if(imc < 24.9){
        resp.innerText = `Seu IMC é de ${imc.toFixed(2)}. Peso normal.`
    }

    else if(imc < 29.9){
        resp.innerText = `Seu IMC é de ${imc.toFixed(2)}. Acima do peso`
    }

    else if(imc < 39.9){
        resp.innerText = `Seu IMC é de ${imc.toFixed(2)}. Você está obeso.`
    }

    else{
        resp.innerText = `Seu IMC é de ${imc.toFixed(2)}. Você está com obesidade grave.`
    }
}

verifyImc()