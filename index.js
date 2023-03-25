/**
 * Converts a time string to milliseconds
 * @param {string} timeString - The time string to convert
 * @returns {number} - The time in milliseconds
 * @throws {Error} - If the time string is invalid
 */

const StringToMs = (timeString) => {
    if (!timeString || !timeString.trim().length)
        throw new Error('Time string can\'t be empty');

    const suffixes = [
        {
            suffix: 's',
            factor: 1000
        },
        {
            suffix: 'm',
            factor: 60000
        },
        {
            suffix: 'h',
            factor: 3600000
        },
        {
            suffix: 'd',
            factor: 86400000
        },
        {
            suffix: 'w',
            factor: 604800000
        },
        {
            suffix: 'M',
            factor: 2592000000
        },
        {
            suffix: 'y',
            factor: 31104000000
        },
    ];

    const timeSuffix = suffixes.find(suffix => timeString.charAt(timeString.length - 1).toLowerCase() == suffix.suffix);

    if (!timeSuffix)
        throw new Error('The suffix must be: s, m, h, d, w, M, y');

    const timeNumber = timeString.slice(0, -1);

    if (isNaN(timeNumber))
        throw new Error('The provided time isn\'t a valid number');

    return (timeNumber * timeSuffix.factor);
}



/**
 * Converts a number of milliseconds to a human-readable time string
 * @param {number} milliseconds - The number of milliseconds to convert
 * @returns {string} - The time string
 * @throws {Error} - If the input is not a number or is invalid
 */

const MsToString = (milliseconds) => {
    if (isNaN(milliseconds))
        throw new Error('The provided value is not a valid number');

    if (milliseconds < 1000)
        return `${(milliseconds / 1000).toFixed(1)}s`;

    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    const timeUnits = [
        {
            unit: 'y',
            value: years
        },
        {
            unit: 'mo',
            value: months % 12
        },
        {
            unit: 'd',
            value: days % 30
        },
        {
            unit: 'h',
            value: hours % 24
        },
        {
            unit: 'm',
            value: minutes % 60
        },
        {
            unit: 's',
            value: seconds % 60
        }
    ];

    const timeString = timeUnits
        .filter(timeUnit => timeUnit.value > 0)
        .map(timeUnit => `${timeUnit.value}${timeUnit.unit}`)
        .join(', ');

    return timeString;
};
/**
 * Abbreviates a large number with a letter suffix
 * @param {number|string} num - The number to abbreviate
 * @returns {string} - The abbreviated string
 */
const abbrev = (num) => {
    if (!num || isNaN(num)) return "0";
    if (typeof num === "string") num = parseInt(num);
    const decimalPlaces = Math.pow(10, 1);
    const abbreviations = ["K", "M", "B", "T"];
    for (let i = abbreviations.length - 1; i >= 0; i--) {
        const size = Math.pow(10, (i + 1) * 3);
        if (size <= num) {
            num = Math.round((num * decimalPlaces) / size) / decimalPlaces;
            if (num == 1000 && i < abbreviations.length - 1) {
                num = 1;
                i++;
            }
            num += abbreviations[i];
            break;
        }
    }
    return `${num}`;
};
/**
 * Draws a circle on a canvas
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
 * @param {number} w - The width of the canvas
 * @param {number} h - The height of the canvas
 * @returns {void}
 * @throws {Error} - If the context or canvas dimensions are invalid
 */

const circle = (ctx, w, h) => {
    if (!ctx) {
        throw new Error('Context is required');
    }
    if (!w || isNaN(w) || !h || isNaN(h)) {
        throw new Error('Invalid canvas dimensions');
    }
    ctx.globalCompositeOperation = "destination-in";
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, h / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    return ctx;
};

/**
 * Draws a rectangle on a canvas context.
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 * @param {number} x - The x-coordinate of the top-left corner of the rectangle.
 * @param {number} y - The y-coordinate of the top-left corner of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {string} [color="#000000"] - The color to fill or stroke the rectangle.
 * @param {boolean} [stroke=false] - Whether to stroke the rectangle instead of filling it.
 * @param {number} [lineWidth=1] - The width of the stroke, if stroke=true.
 * @returns {CanvasRenderingContext2D} - The canvas context with the rectangle drawn on it.
 * @throws {Error} If the canvas context is missing or any of the parameters are not valid numbers.
 */

const drawRect = (ctx, x, y, height, width, color, stroke = false, lineWidth = 1) => {
    if (!ctx) throw new Error("Missing canvas context!");
    if (isNaN(x)) throw new Error(`Expected height to be a number, received ${typeof height}!`);
    if (isNaN(y)) throw new Error(`Expected width to be a number, received ${typeof width}!`);
    if (isNaN(height)) throw new Error(`Expected height to be a number, received ${typeof height}!`);
    if (isNaN(width)) throw new Error(`Expected width to be a number, received ${typeof width}!`);
    if (!color) color = "#000000";
    stroke = !!stroke;

    ctx.beginPath();
    if (stroke) {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.rect(x, y, width, height);
        ctx.stroke();
    } else {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }
    ctx.closePath();
    return ctx;
};

/**
 * Draws a rectangle with rounded corners on a canvas context.
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 * @param {number} x - The x-coordinate of the top-left corner of the rectangle.
 * @param {number} y - The y-coordinate of the top-left corner of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @param {number|boolean} [radius=0] - The radius of the corners, or true for a default radius of 5.
 * @returns {CanvasRenderingContext2D} - The canvas context with the rounded rectangle drawn on it.
 * @throws {Error} If the canvas context is missing or any of the parameters are not valid numbers.
 */

const round = (ctx, x, y, width, height, radius) => {
    if (!ctx) throw new Error("Missing canvas context!");
    if (isNaN(x)) throw new Error(`Expected x to be a number, received ${typeof x}!`);
    if (isNaN(y)) throw new Error(`Expected y to be a number, received ${typeof y}!`);
    if (isNaN(width)) throw new Error(`Expected width to be a number, received ${typeof width}!`);
    if (isNaN(height)) throw new Error(`Expected height to be a number, received ${typeof height}!`);
    if (radius === true) radius = 5;
    if (!radius || typeof radius !== "number") radius = 0;

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();

    return ctx;
};


/**
    Returns a shortened version of a string if its length is greater than the specified limit.
    @param {string} text - The text to shorten.
    @param {number} len - The maximum length of the shortened text.
    @returns {string} - The shortened text with ellipsis added to the end.
    @throws {Error} - If the 'text' argument is not a string, or the 'len' argument is not a positive integer.
*/
const shorten = (text, len) => {
    if (typeof text !== "string") {
        throw new Error("Expected a string for 'text'");
    }
    if (typeof len !== "number" || len < 1) {
        throw new Error("Expected a positive integer for 'len'");
    }
    if (text.length <= len) return text;
    return text.substring(0, len).trim() + "...";
};
/**
 * Formats a hexadecimal color code string by adding a "#" prefix if it's missing,
 * and expanding short-form hex codes to long-form.
 *
 * @param {string} hex - The input hexadecimal color code to be formatted.
 * @param {string} [alt="#000000"] - The default color code to use if `hex` is invalid.
 * @returns {string} The formatted color code.
 * @throws {Error} If `hex` is not a string or `alt` is not a string.
 */
const formatHex = (hex, alt = "#000000") => {
    if (!hex || typeof hex !== "string") {
        throw new Error(`Expected a string value for 'hex', but received ${typeof hex}`);
    }

    hex = hex.replace("#", "");

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    if (hex.length !== 6) {
        if (!alt || typeof alt !== "string") {
            throw new Error(`Expected a string value for 'alt', but received ${typeof alt}`);
        }

        return alt;
    }

    return `#${hex}`;
};

/**
 * Validates a hexadecimal color code string.
 *
 * @param {string} hex - The input hexadecimal color code to be validated.
 * @returns {boolean} `true` if `hex` is valid, `false` otherwise.
 * @throws {Error} If `hex` is not a string.
 */
const validateHex = (hex) => {
    if (!hex || typeof hex !== "string") {
        throw new Error("Invalid hex value");
    }
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

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
module.exports = {
    canvas: {
        circle,
        round,
        drawRect,
    },
    format: {
        abbrev,
        shorten,
        StringToMs,
        MsToString,
        formatHex,
        validateHex
    },
    utils: {
        shuffle,
        clamp,
        capitalize,
        countOccurrences,
        unique,
        reverseString,
        isPalindrome,
        randomInRange,
        arrayAverage,
        extract,
        getAverage,
        normalizeValues,
        getRandomItem,
        flattenObject,
        chunkArray,
        mergeObjects,
        gamble
    },
};
