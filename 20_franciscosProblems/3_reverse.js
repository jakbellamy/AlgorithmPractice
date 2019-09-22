let reverseString = (str) => {
    result = []
    str = str.split('')
    for(i = str.length - 1; i>=0; i--){
        result.push(str[i])
    }
    return result.join('')
}

console.log(reverseString('word'))

let newReverse = (str) => {
    str = str.split('')
    i=0
    while(i < str.length / 2){
        str = str.slice(i, 1).push(str[i])
    }
    return str
}

console.log(newReverse('word'))
