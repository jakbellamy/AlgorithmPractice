//NOT FINISHED

function scramble(str1, str2) {
    str1 = str1.split('');
    str2 = str2.split('');
    let newStr = str1
    for(i = 0; i<str1.length; i++){
      if(str2.filter(letter => letter == str1[0]).length > 0){
         str2 = str2.splice(str2.findIndex(e => e !== newStr[0]), 1);
         newStr = newStr.splice(0, 1);
         console.log('newStr', str1, 'str2', str2)
      }
    }
    return newStr.length > 0 ? false : true
}

console.log(scramble('rkqodlw','world'))