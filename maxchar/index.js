// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let count = 0
    let maxCount = 0
    let char = ''

    str = str.split('')

    for(let i = 0; i < str.length; i++){
        count = 0
        for(let j = i; j < str.length; j++){
            if (str[i] == str[j]) {
               count++
               if (count > maxCount) {
                   maxCount = count
                   char = str[i] 
               } 
            }
        }
        str = str.filter(x => x != str[i])
    }
    return char
}
let result = maxChar("a");
module.exports = maxChar;

