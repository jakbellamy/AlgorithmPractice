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
