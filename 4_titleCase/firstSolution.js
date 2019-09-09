function titleCase(str){
    let convertToArray = str.toLowerCase().split(' ');
    let result = convertToArray.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(' ');
}

console.log(titleCase("hopefully i am now titlecased"))