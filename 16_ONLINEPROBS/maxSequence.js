const maxSequence = function(arr){
    let max = arr[0], i = 0, j = 0
    let temp = 0
    
    if(arr.length == 0){return 0}
    while(i < arr.length){
      for(j=0; j < arr.length; j++){
        temp = arr.slice(i, j+1).reduce((a,b) => a + b, 0)
        if(temp > max){
           max = temp
        }
      }
      i++
    }
    return max >= 0 ? max : 0
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//one i saw online
const maxSequenceTwo = function(arr){
    let currentVal = 0;
    let highestVal = 0
    for(let val of arr){
      currentVal += val;
      if(currentVal < 0) currentVal = 0;
      else if(currentVal > highestVal) highestVal = currentVal
    }
    return highestVal
  }
  
  console.log(maxSequenceTwo([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
