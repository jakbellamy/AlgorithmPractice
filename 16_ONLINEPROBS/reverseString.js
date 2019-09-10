function reverseString(str){
    reversed = []
    str = str.split('')
    i=str.length - 1
    while(i >= 0){
        reversed.push(str[i])
        i--
    }
    return reversed.join('')
}

console.log(reverseString('howdy there neighbor!'))