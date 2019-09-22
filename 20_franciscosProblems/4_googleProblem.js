// You're given a string consisting solely of (, ), and *. * can represent either a (, ), or an empty string. Determine whether the parentheses are balanced.

// For example, (()* and (*) are balanced. )*( is not balanced

let balCheck = (str) => {
    str = str.split('')
    let balance = 0
    for(i=0; i<str.length && balance >= 0; i++){
        if(str[i] == ')'){
            balance --
        }
        if(str[i] == '('){
            balance ++
        }
    }
    return balance == 0 ? true : false
}

console.log(balCheck('(()()((())))'))