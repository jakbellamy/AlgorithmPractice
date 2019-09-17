let diffArray = (arr1, arr2) => {
    let newArr = []
    let ordArr = arr1.concat(arr2).sort()

    for (i = 0; i < ordArr.length; i++){
        if (ordArr[i] !== ordArr[i+1] && ordArr[i] !== ordArr[i-1]) {
            newArr.push(ordArr[i])
        }
    }
    return newArr
}

console.log(diffArray([1,2,3,5,7], [1,2,3,4,5,8,9]))