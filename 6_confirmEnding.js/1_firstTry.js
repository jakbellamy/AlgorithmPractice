function confirmEnding(str, target){
    let strArr = str.split('');
    if(strArr[strArr.length - 1] === target){
        return true
    }else{
        return false
    }
}

console.log(confirmEnding('Bastian', 'n'))

//as a ternary

function ternaryConfirm(str, target){
    let strArr = str.split('');
    return (strArr[strArr.length - 1] === target) ? true : false
}

console.log(ternaryConfirm('Bastian', 'n'))

//with negative operator and substring

function subConfirm(str, target){
    return str.substr(-target.length) === target;
}

console.log(subConfirm('Bastian', 'n'))