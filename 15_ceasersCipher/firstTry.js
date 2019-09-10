function rot13(str){
    //split str into a character array
    let split = str.split('')
    //iterate over each character in the array
    return split.map.call(str, function(char){
        //convert char to a character code
        x = char.charCodeAt(0);
        //check if character lies between A-Z
        if (x < 65 || x > 90){
            return String.fromCharCode(x); //return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78){
            return String.fromCharCode(x + 13);
        }
        //otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
    }).join(''); //rejoin the array into a string
}

console.log(rot13('LBH QVQ VG!'))