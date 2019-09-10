function subConfirm(str, target){
    return str.substr(-target.length) === target;
}

console.log(subConfirm('Bastian', 'n'))

