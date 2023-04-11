let person = {
    firstname: 'Marcos',
    lastname: 'Pinheiro',
    mat: 'Math',
    fullname: function(){
        return this.firstname + ' ' + this.lastname
    }
}

let fName = person.fullname.bind(person)

console.log(fName())