class Person{
    constructor(name){
        this.name = name
    }

    get name(){
        return this._name
    }

    set name(newName){
        newName = newName.trim()
        if(newName === ''){
            throw 'Nome não pode ser vazio'
        }
        this._name = newName
    }
}

let person = new Person('Marcos')
person.name = 'Gabriel'
console.log(person.name)