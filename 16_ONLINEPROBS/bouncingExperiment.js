function bouncingBall(h,  bounce,  window) {
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window > h){
      return -1
    }
    let counter = 1,
        i = h * bounce

    while(i > window){
      counter += 2
      i *= bounce
      console.log(i)
    }
    return bounce == 1 ? -1 : counter
}

console.log(bouncingBall(40, 1, 10))