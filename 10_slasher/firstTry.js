//ex slasher([1,2,3], 2); must return [3]
function slasher(arr, num){
    arr.splice(0, num);
    return arr;
}

console.log(slasher([1,2,3,4,5,6], 3));