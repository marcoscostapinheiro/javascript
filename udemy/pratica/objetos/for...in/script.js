let decoration = {
    color: 'red'
}

let circle = Object.create(decoration)
circle.radius = 10

// retornar todas propriedades, inclusive as herdadas

for(let item in circle){
    console.log(`${item}: ${circle[item]}`)
}

// mostra apenas as propriedades do objeto, excluindo as herdadas

for(let item in circle){
    if(circle.hasOwnProperty(item)){
        console.log(`${item}: ${circle[item]}`)
    }
}
