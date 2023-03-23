let person = {
    firstname: 'Marcos',
    lastname: 'Pinheiro',
    mat: 'Math',
    prof: function(mat){
        return `Eu dou aula de ${mat}`
    }
}

let person2 = {
    firstname: 'Lucas',
    lastname: 'Pinheiro',
    mat: 'Port'
}

console.log(person.prof('Matemática'))

person2.prof = person.prof.bind(person2)

console.log(person2)