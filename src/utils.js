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
 * Clamps a value between a minimum and maximum value.
 * @param {number} value - The value to be clamped.
 * @param {number} min - The minimum value that 'value' can be.
 * @param {number} max - The maximum value that 'value' can be.
 * @returns {number} - The clamped value.
 * @throws Will throw an error if 'value', 'min', or 'max' is not a number.
 */

const clamp = (value, min, max) => {
    if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Invalid input. Arguments must be numbers');
    }

    return Math.min(Math.max(value, min), max);
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to be capitalized.
 * @returns {string} - The capitalized string.
 * @throws Will throw an error if 'str' is not a string.
 */
const capitalize = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Invalid input. Argument must be a string');
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
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
* Reverses a string.
* @param {string} str - The string to reverse.
* @returns {string} The reversed string.
* @throws {Error} Argument must be a string.
*/

const reverseString = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
    }
    return str.split('').reverse().join('');
};

/**
 * Determines whether a string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * @throws {Error} Argument must be a string.
 */

const isPalindrome = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
    }
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
};


/**
 * Generates a random number within a given range.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random number within the given range.
 * @throws {Error} Both arguments must be numbers. The maximum value must be greater than the minimum value.
 */

const randomInRange = (min, max) => {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }
    if (max <= min) {
        throw new Error('The maximum value must be greater than the minimum value.');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Calculates the average value of an array of numbers.
 * @param {Array} arr - The array of numbers to calculate the average from.
 * @returns {number} The average value of the array.
 * @throws {Error} The argument must be an array. The array must contain at least one element.
 */

const arrayAverage = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('The argument must be an array.');
    }
    if (arr.length === 0) {
        throw new Error('The array must contain at least one element.');
    }
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
};

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
 * Simulates a gambling game by returning true or false based on a given win percentage.
 * @param {number} percentage - The win percentage (between 0 and 100).
 * @returns {boolean} True if the player wins, false otherwise.
 * @throws {Error} Invalid percentage value.
 */
const gamble = (percentage) => {
    if (percentage < 0 || percentage > 100) {
        throw new Error('Invalid percentage value');
    }
    const randomValue = Math.random();
    return randomValue < (percentage / 100);
}
/**
 * Calculates the average of an array of numbers
 * @param {Array} nums - The array of numbers to calculate the average for
 * @returns {number} The average of the numbers in the array
 * @throws {Error} If the input is not an array or if the array is empty
 */
const getAverage = (nums) => {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error("Input must be a non-empty array of numbers");
    }

    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return sum / nums.length;
};
/**
 * Normalizes an array of numbers so that they fall within a specific range
 * @param {Array} nums - The array of numbers to normalize
 * @param {number} [min=0] - The minimum value of the new range
 * @param {number} [max=1] - The maximum value of the new range
 * @returns {Array} The normalized array of numbers
 * @throws {Error} If the input is not an array or if the array is empty
 * @throws {Error} If min is greater than or equal to max
 */
const normalizeValues = (nums, min = 0, max = 1) => {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error("Input must be a non-empty array of numbers");
    }

    if (min >= max) {
        throw new Error("Min must be less than max");
    }

    const oldMin = Math.min(...nums);
    const oldMax = Math.max(...nums);

    return nums.map((num) => {
        return ((num - oldMin) / (oldMax - oldMin)) * (max - min) + min;
    });
};

/**
* Returns a random item from an array
* @param {Array} arr - The array to select a random item from
* @returns {*} A random item from the input array
* @throws {Error} If the input is not an array or if the array is empty
*/
const getRandomItem = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Input must be a non-empty array");
    }

    return arr[Math.floor(Math.random() * arr.length)];
};
/**
 * Flattens an object with nested properties into a flat object with path keys
 * @param {object} obj - The object to flatten
 * @param {string} [prefix=""] - The prefix to use for the path keys
 * @returns {object} The flattened object
 * @throws {Error} If the input is not an object
 */
const flattenObject = (obj, prefix = "") => {
    if (typeof obj !== "object") {
        throw new Error("Input must be an object");
    }

    const result = {};

    for (const [key, value] of Object.entries(obj)) {
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === "object") {
            Object.assign(result, flattenObject(value, newKey));
        } else {
            result[newKey] = value;
        }
    }

    return result;
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
 * Merges two or more objects into a new object.
 *
 * @param {...Object} objects The objects to merge.
 * @returns {Object} The merged object.
 */
function mergeObjects(...objects) {
    return objects.reduce((merged, obj) => {
        for (const [key, value] of Object.entries(obj)) {
            merged[key] = value;
        }
        return merged;
    }, {});
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

/**
 * Calculates the progress made towards a goal, given the current progress.
 * 
 * @param {number} current - The current progress towards the goal.
 * @param {number} goal - The required progress towards the goal.
 * @returns {number} The progress made towards the goal, as a percentage between 0 and 1.
 * @throws {Error} Will throw an error if the current or goal values are not numbers or are negative.
 */
function calculateProgress(current, goal) {
    if (typeof current !== 'number' || current < 0) {
        throw new Error('Current progress must be a positive number.');
    }

    if (typeof goal !== 'number' || goal <= 0) {
        throw new Error('Goal progress must be a positive number and greater than 0.');
    }
    return current / goal;
}


module.exports = {
    shuffle,
    clamp,
    capitalize,
    countOccurrences,
    unique,
    reverseString,
    isPalindrome,
    randomInRange,
    arrayAverage,
    calculateProgress,
    extract,
    getAverage,
    normalizeValues,
    getRandomItem,
    flattenObject,
    chunkArray,
    mergeObjects,
    includesArray,
    gamble,
};
