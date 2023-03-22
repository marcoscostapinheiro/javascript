let p = []
var cont = 0
let resp = confirm('Deseja cadastrar?')
console.log(resp)

function Person(firstname, lastname, age){
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
}

Person.prototype.greet = function(){
    return `Olá! Meu nome é ${this.firstname} ${this.lastname} e tenho ${this.age} anos` 
}

while(resp == true){
    p.push(new Person(prompt('Digite o nome'), prompt('Digite o sobrenome'), Number(prompt('Digite a idade'))))
    resp = confirm('Deseja cadastrar?')
}

console.log(p[0].greet())

