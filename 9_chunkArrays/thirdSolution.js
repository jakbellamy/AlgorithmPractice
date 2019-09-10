function chunkArrays(arr, size){
    let newArr = [];
    let i = 0;

    while(i<arr.length){
        newArr.push(arr.slice(i, i+size));
        i += size;
    }
    return newArr
}

console.log(chunkArrays(['a', 'b', 'c', 'd'], 2));
console.log(chunkArrays([0, 1, 2 ,3 , 4, 5], 3));