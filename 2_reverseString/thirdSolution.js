function reverseString(str){
    let reversed = '';
    str.split('');
    for (i=str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed
}

console.log(reverseString("howdy partner"))