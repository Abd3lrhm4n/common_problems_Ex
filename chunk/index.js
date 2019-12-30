// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let mainArray = []

    for (let i = 0; i < array.length; i+=size) {
        let subArray = []

        // loop into array and not pass the size
        for (let j = i; j < i + size; j++) {

            // prevent out of range exception
            if (j < array.length) {

                // add to sub array
                subArray.push(array[j])
            } 
        } 

        // add sub to main array
        mainArray.push(subArray)
    }
    return mainArray
}

chunk([1,2,34,13,4], 2)

module.exports = chunk;
