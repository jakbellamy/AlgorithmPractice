function factorialize(num){
    let result = 1;
    for (i=num; i>0; i--){
        result *= i;
    }
    return result
}

console.log(factorialize(5));