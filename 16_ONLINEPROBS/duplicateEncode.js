function duplicateEncode(word){
    let product = [];
    letters = word.split('')
    for(i=0; i<letters.length; i++){
        if(letters.filter(letter => letter.toLowerCase() == letters[i].toLowerCase()).length > 1){
            product.push(')')
        } else {
            product.push('(')
        }
    }
    return product.join('')
}

console.log(duplicateEncode("Success"),)