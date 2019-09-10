// ex. ["hello", "Hello"] true; ["hello", "hey"] false; ["Alien", "line"] true

function mutation(arr){
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for(let i=0; i<test.length; i++){
        if (target.indexOf(test[i]) === -1){
            return false;
        }
    }
    return true;
}

console.log(mutation(["Alien", "line"]));
console.log(mutation(["hello", "Hey"]))
