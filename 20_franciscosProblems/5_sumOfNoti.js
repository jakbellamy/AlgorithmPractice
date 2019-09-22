sumNotI = (arr) => {
    product = []
    for(i=0; i<arr.length; i++){
        let sum = arr
            .filter((value, index) => i !== index)
            .reduce((a, b) => a*b, 1)
        product.push(sum)
    }
    return product
}

console.log(sumNotI([1, 2, 3, 4, 5]))