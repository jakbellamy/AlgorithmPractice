function isPrime(input){
    div = 2;
    while(div < input){
        if(input % div == 0){
            return false
        }else{
            div++
        }
        
    }
    return true;
}

console.log(isPrime(5))
console.log(isPrime(10))