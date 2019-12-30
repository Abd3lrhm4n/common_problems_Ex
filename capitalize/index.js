// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let newStr = str.split(' ')
    let capArr = []

    for (let i = 0; i < newStr.length; i++) {
        capArr.push(newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1))
    }

    return capArr.join(' ')
}
capitalize("hello world guys")

module.exports = capitalize;
