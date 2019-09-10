//repeat a string
//'candy apples', -1, 4
//basic solution

function repeatStringNumTimes(str, num){
    if (num > 0){
        return str.repeat(num)
    }
    return ''
}

console.log(repeatStringNumTimes('candy apple', -1));
console.log(repeatStringNumTimes('candy apple', 4));