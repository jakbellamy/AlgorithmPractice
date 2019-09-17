//Beginner Way
let begSumAll = (arr) => {
    let max = Math.max(arr[0], arr[1])
    let min = Math.min(arr[0], arr[1])
    let temp = 0
    for (i=min; i <= max; i++){
        temp += i
    }
    return temp;
}

console.log(begSumAll([3,1]))
console.log(begSumAll([1,4]))

//advanced

let advSumAll = (arr) => {
    let sum = 0
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
    return sum;
}

console.log(advSumAll([3,1]))
console.log(advSumAll([1,4]))