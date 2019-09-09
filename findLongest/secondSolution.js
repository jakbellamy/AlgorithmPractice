//intermediate solution
//return the longest length
function longestLength(string){
    return string.split(' ').reduce(function(acc, word){
        return Math.max(acc, word.length)
    }, 0);
}

console.log(longestLength("this is a test"))
