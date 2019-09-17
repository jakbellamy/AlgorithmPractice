const pickPeaks = (arr) => {
    let i = 1
    let results = {
        pos: [],
        peaks: []
    }

    while(i<arr.length){
        if(arr[i] > arr[i+1] && arr[i] > arr[i-1]){
            console.log(arr[i])
            results.pos.push(i)
            results.peaks.push(arr[i])
        }
        if(arr[i] == arr[i + 1] && arr[i] > arr[i - 1]){
            let j = i
            while(arr[i] >= arr[j]){
                if(arr[i] > arr[j]){
                    results.pos.push(i)
                    results.peaks.push(arr[i])
                    break
                }
                j++
            }
        }
        i++
    }
    return results
}

console.log(pickPeaks([ 1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3 ]))