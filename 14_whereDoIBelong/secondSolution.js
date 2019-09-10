//also look back at this one. it just makes good sense
function getIndexToIns(arr, num){
    arr.sort(function(a, b){ 
        return a-b;
    });

    let i = 0;

    while (num > arr[i]) {
        i++;
    };

    return i
}

console.log(getIndexToIns([1,2,3,4], 1.5))
console.log(getIndexToIns([20,3,5], 19))
console.log(getIndexToIns([40,60], 30))