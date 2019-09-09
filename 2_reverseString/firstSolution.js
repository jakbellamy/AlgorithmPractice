//easiest solution
function reverseString(str){
    str = str.split('');
    str = str.reverse('');
    str = str.join('');
}
console.log(reverseString("hey partner"))