function createPerson(id){
    if(id <= 0){
        return null
    }

    return {
        id: id,
        username: 'admin',
        profile: {
            avatar: 'avatar.png',
            language: 'english'
        }
    }
}

let person = createPerson(0)
let avatar = person ?. profile ?. avatar
console.log(avatar)