function truncateString(str, max){
    if (str.length > max && max > 3){
        return str.slice(0, (max - 3)) + '...';
    } else if (str.length > max && max <= 3){
        return str.slice(0, max) + '...';
    } else {
        return str;
    }
}

console.log(truncateString('Orange'))