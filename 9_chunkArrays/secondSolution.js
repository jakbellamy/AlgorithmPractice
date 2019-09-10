function chunkArrays(arr, size){
    let arr2 = [];
    for(i=0; i<arr.length; i += size){
        arr2.push(arr.slice(i, i + size));
    }
    return arr2;
}

console.log(chunkArrays(['a', 'b', 'c', 'd'], 2));
console.log(chunkArrays([0, 1, 2 ,3 , 4, 5], 3));