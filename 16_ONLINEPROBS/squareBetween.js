function primeGap(gap, start, end) {
    let lastPrime = 0;
    const isPrime = (x) => { 
      for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
    }
    
    for(var i = start; i <= end; i++)
        if(isPrime(i)) {
            if(i - lastPrime == gap) return [lastPrime, i];
            else lastPrime = i;
        }
      
    return null;
}

    



console.log(primeGap(2, 100, 110))
console.log(primeGap(4, 100, 110))
console.log(primeGap(6, 100, 110))
