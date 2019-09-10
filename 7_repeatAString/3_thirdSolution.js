//nice clean solution
function repeatString(str, num){
    return num > 0 ? str.repeat(num) : ''
}

console.log(repeatString('candy apple', 5))