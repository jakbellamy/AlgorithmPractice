 let numArray = [
     [1, 7, 500, 33],
     [6, 28, 15, 287],
     [33, 56, 29, 11],
     [22, 19, 5, 130]
];

function largestOfFour(arr){
    let results = [];
    arr.forEach(array => {
        let largestNumber = array[0];
        array.forEach(num => {
            if (num > largestNumber){
                largestNumber = num;
            };
        });
        results.push(largestNumber);
    });
    return results;
}

console.log(largestOfFour(numArray))
