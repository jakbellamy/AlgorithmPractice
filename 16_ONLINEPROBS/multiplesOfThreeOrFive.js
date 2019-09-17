function solution(number){
  let multiples = [];
  if(number < 3){return 0}
  i = 3
  while(i < number){
      if(i % 3 == 0 && i % 5 == 0){
          multiples.push(i)
      }
      else if(i % 3 == 0 || i % 5 == 0){
          multiples.push(i)
      }
      i++
  }
  return multiples.reduce((a,b) => a + b, 0)
}

console.log(solution(10))