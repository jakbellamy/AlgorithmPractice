var falsyArr = [0, 1, 2, 3, null, 5, "", 7, 8, undefined, 10, NaN, false, 13];

function bouncer(arr){
    return arr.filter(e => e);
}

console.log(bouncer(falsyArr))

//or even fancier

function simpleBounce(arr){
    return arr.filter(Boolean);
};

console.log(simpleBounce(falsyArr));