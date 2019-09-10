function mergeSortedArrays(a, b){
    let merged = []
    let aTar = a[0]
    let bTar = b[0]
    let i = 1
    let j =1

    //fancy one stop solution to avoid two ifs
    if(a.length == 0 || b.length == 0){
        return a > b ? a : b;
    }

    while(aTar || bTar){
        if((aTar && !bTar) || aTar < bTar){
            merged.push(aTar);
            aTar = a[i++]
        }else{
            merged.push(bTar);
            bTar = b[j++]
        }
    }
    return merged;
}

console.log(mergeSortedArrays([2,5,6,9], [1,2,3,29]))