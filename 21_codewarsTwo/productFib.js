function productFib(prod){
    let fibs = (num) => {
        let fibNums = [0, 1], i = 1
        while(i < num && num > fibNums[i] * fibNums[i-1]){
            fibNums.push(fibNums[i] + fibNums[i-1])
            i++  
        }
        return fibNums
    }

    let product = [], fArr = fibs(prod)

    for(i=1; i < fArr.length - 1; i++){
        if(fArr[i] * fArr[i+1] == prod){
            product = [fArr[i], fArr[i + 1], true]
        } else {
            product = [fArr[i], fArr[i+1], false]
        }
    }
    return product
}

console.log(productFib(74049690))