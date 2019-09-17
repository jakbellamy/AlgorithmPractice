function uniqueInOrder(arg){
    if(typeof arg == 'string'){
        arg = arg.split('');
    }
    let lastChar;
    let product = [];
    for(i = 0; i < arg.length; i++){
        if (arg[i] !== lastChar){
            product.push(arg[i]);
        }
        lastChar = arg[i]
    }
    return product
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,2,3,3]))