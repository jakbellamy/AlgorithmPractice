//Happy this one is neat :)

function titleCase(str){
    input = str.split(' ');
    product = [];
    
    input.forEach(word => {
        word = word.toLowerCase().split('');
        word[0] = word[0].toUpperCase();
        word = word.join('')
        product.push(word)
    })
    return product.join(' ')
}

console.log(titleCase("hopefully i am now titlecased"))