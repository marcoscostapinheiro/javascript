let person = {
    firstname: 'Marcos',
    lastname: 'Pinheiro',
    age: 18
}

let about = {
    job: 'Programathor'
}

person.__proto__ = about

let keys = Object.values(person)

for(let i = 0; i < keys.length; i++){
    console.log(keys[i])
}
