let maxChar = (string) => {
    let strArr = string.split('').sort()
    let max = {count: 0, value: []}
    let count = 0
    for(i = 0; i < strArr.length; i++){
        if(strArr[i] != strArr[i-1]){
            count = 1
        } else {
            count ++ 
        }
        if(count == max.count){
            max.value.push(strArr[i])
        }
        if(count > max.count) {
            max.value = [strArr[i]]
            max.count = count
        }
    }
    return max.value.lenght > 1 ? max.value.join('and ') : max.value.join('')
}

console.log(maxChar('abcccccbbbbd'))