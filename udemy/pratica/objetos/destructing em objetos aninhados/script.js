let person = {
    name: {
        firstname: 'Marcos',
        lastname: 'Pinheiro'
    },
    age: 18
}

let {name: {
    firstname, 
    lastname
}} = person

console.log(firstname)
console.log(lastname)