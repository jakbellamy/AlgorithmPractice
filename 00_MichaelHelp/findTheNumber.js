function findNumber(arr, k){
    for(i=0; i<arr.length; i++){
        if (arr[i] == k){
            return 'Yes'
        }
    }
    return 'No'
}

console.log(findNumber([1, 2, 3, 4], 2))