let initSet = [11, 23, 83, 41, 95, 36, 77, 81, 90];
let victims = [11, 33, 88, 41, 77, 8, 4, 10];

//VERY CLEAN I LIKE THIS ONE
function destroyer(arr, secondArray){
    return arr.filter(val => {
        return !secondArray.includes(val);
    })
}

console.log(destroyer(initSet, victims))