let numArray = [
    [1, 7, 500, 33],
    [6, 28, 15, 287],
    [33, 56, 29, 11],
    [22, 19, 5, 130]
];

function largestOfFour(arr){
    return arr.map(Function.apply.bind(Math.max, null));
}

console.log(largestOfFour(numArray))
