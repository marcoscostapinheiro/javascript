let nome = 'Marcos'
let age = 18

let person1 = {
    nome,
    age
}

function createPerson(nome, age){
    return {
        nome,
        age
    }
}

let person2 = createPerson('Gabriel', 22)

console.log(person1)
console.log(person2)