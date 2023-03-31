const crypto = require('crypto');
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
* Returns a random item from an array
* @param {Array} arr - The array to select a random item from
* @returns {*} A random item from the input array
* @throws {Error} If the input is not an array or if the array is empty
*/
const getRandomItem = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Input must be a non empty array");
    }

    return arr[Math.floor(Math.random() * arr.length)];
};
/**
 * Generate a random string with customizable options.
 * @param {Object} options - The options for generating the random string.
 * @param {boolean} [options.includeNumbers=true] - Whether to include numbers in the generated string.
 * @param {boolean} [options.includeSymbols=false] - Whether to include symbols in the generated string.
 * @param {number} [options.length=10] - The length of the generated string.
 * @param {boolean} [options.secure=false] - Whether to use cryptographically secure random number generator.
 * @param {string} [options.prefix=''] - A prefix to add to the beginning of the generated string.
 * @param {string} [options.suffix=''] - A suffix to add to the end of the generated string.
 * @param {boolean} [options.capitalize=false] - Whether to capitalize the first character of the generated string.
 * @param {boolean} [options.lowercase=false] - Whether to convert the generated string to lowercase.
 * @param {boolean} [options.uppercase=false] - Whether to convert the generated string to uppercase.
 * @throws {Error} If an invalid option is passed.
 * @returns {string} The generated random string.
 */
function generateRandomString(options = {}) {
    const {
        includeNumbers = true,
        includeSymbols = false,
        length = 10,
        secure = false,
        prefix = '',
        suffix = '',
        capitalize = false,
        lowercase = false,
        uppercase = false
    } = options;

    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) {
        chars += '0123456789';
    }
    if (includeSymbols) {
        chars += '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    }

    if (typeof length !== 'number' || length <= 0) {
        throw new Error('Invalid length parameter.');
    }

    if (typeof chars !== 'string' || chars.length === 0) {
        throw new Error('Invalid chars parameter.');
    }

    let result = '';
    if (secure) {
        const randomBytes = crypto.randomBytes(length);
        for (let i = 0; i < length; i++) {
            result += chars.charAt(randomBytes[i] % chars.length);
        }
    } else {
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    }

    if (prefix) {
        result = prefix + result;
    }
    if (suffix) {
        result = result + suffix;
    }
    if (capitalize) {
        result = result.charAt(0).toUpperCase() + result.slice(1);
    }
    if (lowercase) {
        result = result.toLowerCase();
    }
    if (uppercase) {
        result = result.toUpperCase();
    }

    return result;
}

module.exports = {
    randomInRange,
    gamble,
    getRandomItem,
    generateRandomString
}