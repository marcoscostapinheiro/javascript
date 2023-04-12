class Person{
    constructor(fname, lname){
        this.firstname = fname
        this.lastname = lname
    }
    getFullName(){
        return this.firstname + ' ' + this.lastname
    }
}

let person = new Person('Marcos', 'Pinheiro')
console.log(person)