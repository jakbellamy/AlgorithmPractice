function diagonalDifference(arr){
    //setting up values
    let rightDiagonal = 0, leftDiagonal = 0

    //summing rightDiagonal
    let rightPointer = arr[0].length - 1
    for(j=0; j<arr.length;j++){
        rightDiagonal += arr[j][rightPointer]
        rightPointer--
    }

    //summing leftDiagonal
    let leftPointer = 0
    for(i=0; i<arr.length;i++){
        leftDiagonal += arr[i][leftPointer]
        leftPointer++
    }

    //returnd difference
    return Math.abs(rightDiagonal - leftDiagonal)
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))