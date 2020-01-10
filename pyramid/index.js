// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let i = 0; i <= n; i++) {
        let str = ''
        for (let k = 0; k < n - i; k++) {
            str += '-'
        }
        for (let j = i; j <2 * n - i; j++) {
            str += '#'
        }
        for (let m = 0; m < n - i; m++) {
            str += '-'
        }
    console.log(str)
    }
}
pyramid(3)
module.exports = pyramid;
