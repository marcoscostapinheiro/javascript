function createObject(fn, ln){
    return{
        firstname: fn,
        lastname: ln,
        getFullName: function(){
            return fn + ' ' + ln
        }
    }
}

let person1 = createObject('Marcos', 'Pinheiro')
let person2 = createObject('Gustavo', 'Silva')

console.log(person1.getFullName())
console.log(person2.getFullName())