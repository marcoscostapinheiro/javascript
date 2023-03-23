function Person(){
    this.firstname = 'Marcos'
    this.lastname = 'Pinheiro'
 
}

Person.prototype.getFullname = () => {
    return this.firstname + ' ' + this.lastname
}

let p1 = new Person()

console.log(p1.getFullname())

function Person2(){
    this.firstname = 'Lucas'
    this.lastname = 'Pinheiro'
}

Person2.prototype.getFullname = function(){
    return this.firstname + ' ' + this.lastname
}

let p2 = new Person2()

console.log(p2.getFullname())
