// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let junk = [0, 1]
    for (let i = 2; i <= n; i++) {
        junk.push(junk[i - 2] + junk[i - 1])
    }
    return junk[junk.length - 1]
}

function recursiveFib(n){
    if (n < 2) {
        return n
    }

    return recursiveFib(n - 2) + recursiveFib(n - 1)
}

module.exports = fib;
