// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let newInt = Math.abs(n).toString().split('').reverse().join('');
    newInt = n < 0 ? newInt * -1 : newInt

    return parseInt(newInt)
}
reverseInt(-5)
reverseInt(-51)
module.exports = reverseInt;
