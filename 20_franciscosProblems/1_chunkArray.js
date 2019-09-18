let chunkArray = (arr, size) => {
    let product = []
    for(i = 0; i < arr.length; i += size){
        let subProduct = []
        let j = 0
        while(j < size && j + i < arr.length){
            subProduct.push(arr[i + j])
            j++
        }
        product.push(subProduct)
    }
    return product
}

console.log(chunkArray([1, 2, 3, 4, 5], 2))

let oneLoopChunk = (arr, size) => {
    let product = []
    let subProduct = []
    for(i=0; i<arr.length; i++){
        if (subProduct.length == size - 1){
            subProduct.push(arr[i])
            product.push(subProduct)
            subProduct = []
        } 
        else {
            subProduct.push(arr[i])
        }
    }
    if(subProduct.length > 0){product.push(subProduct)}
    return product
}

console.log(oneLoopChunk([1, 2, 3, 4, 5], 2))
