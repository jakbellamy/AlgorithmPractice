function score( dice ) {
    dice = dice.sort()
    let score = 0,    
        i = 0
        
    while(i < dice.length){
      if(dice[i] === dice[i+2]){
        dice[i] === 1 ? score += 1000 : score += dice[i] * 100;
        i += 3
      }
      if(dice[i] !== dice[i+2]){
        switch(dice[i]){
          case 1:
            score += 100
            break;
          case 5:
            score += 50
            break;
        }
        i++
      }
    }
    return score
}

console.log(score([4, 4, 4, 3, 3]))


// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.


// Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point