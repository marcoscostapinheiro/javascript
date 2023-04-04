function createPerson(id){
    if(id <= 0){
        return null
    }   

    return {
        id: id,
        profile: {
            username: 'admin',
            avatar: 'avatar.png'
        }
    }
}

let person = createPerson(-1)
let profile = person ?. profile ?? 'noUser'

console.log(profile)