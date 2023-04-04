function createPerson(id){
    if(id <= 0){
        return null
    }   

    return {
        id: id,
        profile: {
            username: 'admin',
            avatar: 'avatar.png'
        },
        greet: function(){
            return 'OI'
        }
    }
}

let person = createPerson(1)
let greet = person ?. greet ?. ()
console.log(greet)