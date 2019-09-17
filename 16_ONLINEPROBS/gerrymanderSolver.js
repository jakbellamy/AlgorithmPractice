//Given a 5 x 5 region populated by 25 citizens, your task is to write a function that divides the region into 5 districts given the following conditions:

// * 10 citizens will vote for your candidate, while the other 15 will vote for the opponent
// * Your candidate must win the popular vote for 3 of the 5 districts
// * Each district must have an equal number of voters
// * Each district must be one contiguous cluster of voters (i.e. each voter has one or more orthogonally adjacent neighbors from the same district)

//NOTFINISHED
let region = [
    'OOXXX',
    'OOXXX',
    'OOXXX',
    'OOXXX',
    'OOXXX'
]

function gerryManderSolver(district){
    for(i = 0; i < district.length; i++){
        district.splice(i, 1, district[i].split(''))
    }
    for(i = 0; i < district.length; i++){
        
    }
}

console.log(gerryManderSolver(region))