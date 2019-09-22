function LCS(x, y) {
    console.log(x, y)
    x = x.split(''), y = y.split('')
    let sequence = []
    for(i=0; i<y.length; i++){
        if(x.indexOf(y[i]) != -1){
            let c = 0, j = x.indexOf(y[i])
            while(x[j] === y[i]){
                sequence.push(y[i])
                y.splice(i, 1)
                x.splice(j, 1)
            }
        } else i++
    }
    return sequence.join('')
}

//should return '12356'
console.log(LCS("anothertest" , "notatest"))
console.log(LCS("abcdef", "abc"))