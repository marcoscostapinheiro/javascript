let person = {
    firstname: 'Marcos',
    lastname: 'Pinheiro',
    age: 18
}

let about = {
    job: 'Programathor'
} 

let nacionality = {
    country: 'Brazil',
    city: 'Eunapolis'
}

let record = {
    cpf: '000.111.222-33'
}

let copied = Object.assign(record, person, about, nacionality)

console.log(copied)