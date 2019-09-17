function validParentheses(parens){
    parens = parens.split('');
    if(parens[0] == ')'){return false}

    let open = 1
    for(i=1; i<parens.length; i++){
        if (parens[i] == ')'){
            open --
        } else if (parens[i] == '('){
            open ++
        }
    }
    return open === 0 ? true : false
  }

console.log(validParentheses('(asdf)d(dad)d(adf)a'));