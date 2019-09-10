//returns what place said number should belong in given array if it were included and the array was sorted
function getIndexToIns(arr, num){
    arr.sort((a, b) => {
        return a-b;
    })
    //this is a case when for loop is easier than forEach
    for (i=0; i<arr.length; i++){
        if (arr[i] >= num){
            return i
        }
    }
}

console.log(getIndexToIns([1,2,3,4], 1.5))
console.log(getIndexToIns([20,3,5], 19))
console.log(getIndexToIns([40,60], 30))