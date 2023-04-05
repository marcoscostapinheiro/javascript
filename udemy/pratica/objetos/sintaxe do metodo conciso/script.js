let person = {
    firstname: 'Marcos',
    lastname: 'Pinheiro',
    fullName(){
        return this.firstname + ' ' + this.lastname
    }
}

console.log(person.fullName())