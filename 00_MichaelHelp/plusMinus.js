function plusMinus(arr){
    let pos = 0, neg = 0, zero = 0
    for(i=0; i<arr.length; i++){
        if(arr[i] > 0){
            pos++
        } else if(arr[i] < 0){
            neg++
        } else if(arr[i] === 0){
            zero++
        }
    }
    //returning solution
    let total = arr.length
    return [pos/total, neg/total, zero/total]
}

console.log(plusMinus([1, 2, -1, 0, -1]))