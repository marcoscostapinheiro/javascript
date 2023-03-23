let person = {
    prof: 'Teacher',
    mat: 'Math',
    greet: function(){
        return 'Eu sou professor de matemática!'
    }
}

let marcos = {
    firstname: 'Marcos',
    lastname: 'Pinheiro'
}

marcos.__proto__ = person

console.log(marcos)