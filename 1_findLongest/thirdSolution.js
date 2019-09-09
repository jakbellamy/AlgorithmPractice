// just length
function longestWordLength(string){
    string = string.split(' ');

    if (string.length == 1){
        return string[0].length;
    }

    if (string[0].length >= string [1].length){
        string.splice(1,1);
        return longestWordLength(string.join(' '));
    }

    if (string[0].length <= string[1].length){
        return longestWordLength(string.slice(1, string.length).join(' '));
    }

    return string.length;
}

console.log(longestWordLength("will this work as well? Absolutely!"))

//just word
function longestWord(string){
    string = string.split(' ');
    console.log(string)
    if (string.length == 1){
        return string[0];
    }

    if (string[0].length >= string[1].length){
        string.splice(1,1);
        return longestWord(string.join(' '));
    }

    if (string[0].length <= string[1].length){
        return longestWord(string.splice(1, string.length).join(' '));
        
    }

    return string
}

console.log(longestWord("will this work as really-very-well? Absolutely! haha more words"))