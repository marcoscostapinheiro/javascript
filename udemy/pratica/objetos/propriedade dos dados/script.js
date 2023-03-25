let person = {
    firstname: 'Marcos',
    lastname: 'Pinheiro'
}

Object.defineProperty(person, 'age', {
    enumerable: true,
    value: 18
})

console.log(person)

for(let item in person){
    console.log(item)
}