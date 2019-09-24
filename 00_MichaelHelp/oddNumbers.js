function oddNumbers(start, end){
    let product = []
    for(i=start; i<=end; i++){
        if(i % 2 != 0){
            product.push(i)
        }
    }
    return product
}

console.log(oddNumbers(2, 5))