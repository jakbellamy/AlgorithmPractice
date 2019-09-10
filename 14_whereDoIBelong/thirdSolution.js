//very simple. Makes me wonder why i didn't think of this one first.
function getIndexToIns(arr, num){
    arr.push(num);
    arr.sort(function(a, b){ return a - b});
    return arr.indexOf(num)
}

console.log(getIndexToIns([1,2,3,4], 1.5))
console.log(getIndexToIns([20,3,5], 19))
console.log(getIndexToIns([40,60], 30))