let string = "qoitupzcmnvalsjkfhdl"
let letter = "f"
// first the most obvious way to search a string for a given letter 
// function stringIncludes(string, letter){
//     let matches;
//     for(let i = 0; i < string.length; i++){
//       if(string[i] === letter){
//         matches = true
//       }
//     }
//     return !!matches
//   }
 
//   console.log(stringIncludes(string, letter))

  function binarySearch(string, letter) {
    string = string.split('').sort().join('')
    console.log('sorted string:', string)
    var startpoint = 0
    var endpoint = string.length - 1;
    var guessPosition = parseInt((endpoint - startpoint)/2)
    while (startpoint != endpoint) {
      console.log(`start point is ${startpoint}, endpoint is ${endpoint} and guessposition is ${guessPosition}`)
        if (string[guessPosition] < letter) {
          console.log('too low')
            startpoint = guessPosition
            guessPosition = startpoint + Math.round((endpoint - startpoint)/2)
        } else if(string[guessPosition] > letter) {
          console.log('too high')
            endpoint = guessPosition
            guessPosition = startpoint + parseInt((endpoint - startpoint)/2)
        } else {
          console.log('just right')
            return true;
        }
    }
    if(string === letter){
      return true
    } else{
      console.log('sorry')
      return false;
    }
  }

  console.log(binarySearch(string, letter))
