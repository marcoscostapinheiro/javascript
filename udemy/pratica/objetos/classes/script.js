let persons = []
const resultado = document.getElementById('resultado')

class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    greet = function(){
        return `Olá! Meu nome é ${this.firstname} ${this.lastname} e tenho ${this.age} anos.`
    }
}

function addPerson(){
    let inputName = document.getElementById('itxtname')
    let inputLastName = document.getElementById('itxtsubn')
    let inputAge = document.getElementById('itxtage')
    let firstname = inputName.value
    let lastname = inputLastName.value
    let age = inputAge.value

    persons.push(
        new Person(firstname, lastname, age)
    )

    inputName.value = ''
    inputLastName.value = ''
    inputAge.value = ''

    resultado.innerHTML += `<p>Nome: ${firstname}`
    resultado.innerHTML += `<p>Sobrenome: ${lastname}</p>`
    resultado.innerHTML += `<p>Idade: ${age}</p>`
    resultado.innerHTML += `<p>________________________</p>`
}

console.log(persons)
