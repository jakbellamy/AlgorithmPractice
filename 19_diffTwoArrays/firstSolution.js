let diffArray = (arr1, arr2) => {
    let product = [];

    let onlyInFirst = (first, second) => {
        for (let i = 0; i < first.length; i++){
            if (second.indexOf(first[i]) === -1){
                product.push(first[i]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return product;
}

console.log(diffArray([1,2,3,5,7], [1,2,3,4,5,8,9]))