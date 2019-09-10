function spinWords(sentence){
    sentence = sentence.split(' ');
    let product = [];
    
    for(let i=0; i<sentence.length; i++){
      if (sentence[i].length >=5){
        sentence.splice(i, 1, sentence[i].split('').reverse().join(''))
      }
      product.push(sentence[i]);
    }
    return product.join(' ')
}

console.log(spinWords("Hey fellow warriors"))