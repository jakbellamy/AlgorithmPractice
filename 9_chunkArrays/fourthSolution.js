//by far cleanest. this should be standard
function chunkArrays(arr, size){
    let newArr = [];
    while(arr.length){
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}

console.log(chunkArrays(['a', 'b', 'c', 'd'], 2));
console.log(chunkArrays([0, 1, 2 ,3 , 4, 5], 3));