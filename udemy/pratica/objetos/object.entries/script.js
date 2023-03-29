let person = {
    firstname: 'Marcos',
    lastname: 'Pinheiro',
    age: 18
}

let keyAndValues = Object.entries(person)

for(let i = 0; i < keyAndValues.length; i++){
    console.log(`${keyAndValues[i][0]}: ${keyAndValues[i][1]}`)
}