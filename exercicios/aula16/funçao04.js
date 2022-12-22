function fat(num){
    var fat = 1
    for (c = num; c >= 1; c--){
        fat *= c
    }
    return fat
}

console.log(fat(4))