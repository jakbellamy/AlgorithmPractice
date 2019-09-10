let initSet = [11, 23, 83, 41, 95, 36, 77, 81, 90];
let victims = [11, 33, 88, 41, 77, 8, 4, 10];

function destroyer(arr, secondArray){
    for(i=0; i<arr.length; i++){
        for(n=0; n<secondArray.length; n++){
            if(arr[i] === secondArray[n]){
                delete arr[i]
            }
        }
    }
    return arr.filter(Boolean)
}

console.log(destroyer(initSet, victims))