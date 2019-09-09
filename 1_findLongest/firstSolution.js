//return actual word
function longestWordOne(string){
    words = string.split(' ');
    longest = '';
    for(i=0; i<words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }
    console.log(longest)
}

longestWordOne("This is a test")

//return length
function longestLengthOne(string){
    words = string.split(' ');
    longest = 0;
    for(i=0; i<words.length; i++){
        if(words[i].length > longest){
            longest = words[i].length
        }
    }
    return longest
}

longestLengthOne("This is a test")

//with forEach instead of for
function longestWordTwo(string){
    words = string.split(' ');
    longest = '';
    words.forEach(word => {
        if(word.length > longest.length){
            longest = word
        }
    })
    console.log(longest)
}

longestWordTwo('hey is this thing gonna work')