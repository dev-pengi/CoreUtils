
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
    if (typeof hex !== 'string') {
        throw new Error(`Expected a string value for 'hex', but received ${typeof hex}`);
    }

    if (typeof alt !== 'string') {
        throw new Error(`Expected a string value for 'alt', but received ${typeof alt}`);
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



module.exports = {
    abbrev,
    shorten,
    formatHex,
    validateHex,
}