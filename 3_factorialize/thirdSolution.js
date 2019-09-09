function factorialize(num){
    for (product=1; num >= 1; num--){
        product *= num
    }
    return product
}

console.log(factorialize(5))