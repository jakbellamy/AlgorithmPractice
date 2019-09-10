function truncateString(str, max){
    if (str.length > max){
        return str.slice(0, max > 3 ? max -3 : max) + '...';
    }
    return str;
}

console.log(truncateString('Orange'))