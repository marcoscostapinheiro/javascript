let person = {
    firstname: 'Marcos',
    lastname: 'Pinheiro',
    currentAge: 18
}

let {firstname, lastname, middlename = ' ', currentAge: age} = person

console.log(firstname)
console.log(lastname)
console.log(middlename)
console.log(age)