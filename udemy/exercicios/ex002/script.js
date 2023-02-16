let txtnum1 = window.prompt('Digite o 1° número')
let txtnum2 = window.prompt('Digite o 2° número')
let txtnum3 = window.prompt('Digite o 3º número')

let num1 = Number(txtnum1)
let num2 = Number(txtnum2)
let num3 = Number(txtnum3)

let med = (num1 + num2 + num3) / 3

alert(`A média é ${med}`)