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

module.exports = {
    randomInRange,
    gamble,
    getRandomItem,
}