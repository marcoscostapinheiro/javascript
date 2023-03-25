let person = {
    
}

Object.defineProperty(person, 'fullname', {
    get: function(){
        return this.firstname + ' ' + this.lastname
    },

    set: function(value){
        let parts = value.split(' ')
        if(parts.length === 2){
            this.firstname = parts[0]
            this.lastname = parts[1]
        }
        else{
            throw 'Formato inválido'
        }
    }
})

person.fullname = 'Marcos Pinheiro'
console.log(person)