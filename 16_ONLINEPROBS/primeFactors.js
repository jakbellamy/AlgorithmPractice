// function primeFactors(input){
//     let factors = [];
//     let div = 2;

//     while(div<input){
//         if(input % div == 0){
//             factors.push(div);
//             input = input/div;
//         }
//         else{
//             div++
//         }
//     }
//     return factors;
// }

function primeFactors(input){
    let factors = [] ;
    let div = 2;
    
    while(input > 2){
      if(input % div == 0){
         factors.push(div); 
         input = input/ div;
      }
      else{
        div++;
      }     
    }
    return factors;
  }

console.log(primeFactors(69));