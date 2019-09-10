function removeDuplicate(arr){
    let cleanArray = []
    arr.forEach(num => {
        if(!cleanArray.includes(num)){
            cleanArray.push(num)
        }
    })
    return cleanArray
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]))