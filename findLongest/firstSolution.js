//return actual word
function longestWord(string){
    words = string.split(' ');
    longest = '';
    for(i=0; i<words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest
}

console.log(longestWord("This is a test"))

//return length
function longestLength(string){
    words = string.split(' ');
    longest = 0;
    for(i=0; i<words.length; i++){
        if(words[i].length > longest){
            longest = words[i].length
        }
    }
    return longest
}

console.log(longestLength("This is a test"))
