let person = {
    firstname: 'Marcos',
    lastname: 'Pinheiro'
}

let fullname = ({firstname: f, lastname: l}) => console.log(f + ' ' + l)

fullname(person)
