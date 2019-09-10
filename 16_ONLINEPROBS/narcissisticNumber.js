function narcissistic(value) {
    let split = value.toString().split(''),
        test = []

    split.forEach(val => {
        test.push(Math.pow(val, split.length))
    })

    if(test.reduce(function(a,b){ return a+b }, 0) == value){
        return true
    }
    return false
  }
  
  console.log(narcissistic( 371 ))