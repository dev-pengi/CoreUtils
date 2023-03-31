/**
 * Extracts the values of a specified key from an array of objects
 * @param {Array} arr - The array of objects to extract values from
 * @param {string} key - The name of the key to extract values for
 * @returns {Array} An array with the extracted values
 * @throws {Error} If the array is empty or undefined, or if the key is not a string or is an empty string
 */
const extract = (arr, key) => {
    if (!arr || arr.length === 0) {
        throw new Error("Array is empty or undefined");
    }
    if (typeof key !== "string" || key.trim().length === 0) {
        throw new Error("Key is not a string or is an empty string");
    }

    return arr.map(obj => obj[key]);
};


/**
 * Counts the number of occurrences of a value in an array.
 * @param {Array} arr - The array to search for occurrences of 'val'.
 * @param {*} val - The value to search for in the array.
 * @returns {number} - The number of occurrences of 'val' in 'arr'.
 * @throws Will throw an error if 'arr' is not an array.
 */

const countOccurrences = (arr, val) => {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
};


/**
 * Removes duplicates from an array.
 * @param {Array} arr - The array to remove duplicates from.
 * @returns {Array} A new array with duplicates removed.
 * @throws {Error} Argument must be an array.
 */
const unique = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array');
    }
    return [...new Set(arr)];
};
/**
 * Shuffles an array in place using the Fisher-Yates shuffle algorithm.
 *
 * @param {Array} arr - The input array to be shuffled.
 * @returns {Array} The shuffled array.
 * @throws {Error} If `arr` is not an array.
 */

const shuffle = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Invalid input. Argument must be an array');
    }

    const shuffledArr = [...arr];

    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }

    return shuffledArr;
};


/**
 * Splits an array into chunks of a specified size.
 *
 * @param {Array} arr The array to chunk.
 * @param {number} size The size of each chunk.
 * @returns {Array} An array of chunks.
 */
function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

/**
 * Checks if an array includes at least one item of another array.
 *
 * @param {Array} array1 - The first array to check.
 * @param {Array} array2 - The second array to check.
 * @returns {Boolean} - True if array2 includes at least one item from array1, false otherwise.
 * @throws {TypeError} - If either parameter is not an array.
 */
function includesArray(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new TypeError('Both parameters must be arrays.');
    }

    return array2.some(item => array1.includes(item));
}



module.exports = {
    includesArray,
    chunkArray,
    shuffle,
    unique,
    countOccurrences,
    extract,
};
