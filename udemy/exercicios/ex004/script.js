let num1 = Number(window.prompt('Digite o 1º número'))
let num2 = Number(window.prompt('Digite o 2° número'))
let num3 = Number(window.prompt('Digite o 3° número'))

function verifyBigger(x=0, y=0, z=0){
    let maior = 0
    for(let i = 0; i < 3; i++){
        if(arguments[i] > maior){
            maior = arguments[i]
        }
    }
    return maior
}

window.alert(`O maior valor digitado foi ${verifyBigger(num1, num2, num3)}`)