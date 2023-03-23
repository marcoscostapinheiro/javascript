class Person{
    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }

    greet = function(){
        return 'Método do p1'
    }
}

let p1 = new Person('Marcos', 'Pinheiro')
let p2 = new Person('Lucas', 'Pinheiro')

p2.greet = function(){
    return 'Método do p2'
}

console.log(p1.greet())
console.log(p2.greet())