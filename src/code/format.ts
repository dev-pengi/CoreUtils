/**
 * Abbreviates a large number with a letter suffix
 * @param number - The number to abbreviate
 * @returns The abbreviated string
 */
function abbrev(number: number | string): string {
    const suffixes = ["", "K", "M", "B", "T", "Q", "Qu", "S", "Sept", "O", "N"];
    let value: number;

    if (typeof number === "string") {
        value = parseFloat(number);
    } else {
        value = Number(number);
    }

    if (isNaN(value) || !isFinite(value))
        return '0';


    let suffixIndex = 0;
    while (value >= 1000 && suffixIndex < suffixes.length - 1) {
        value /= 1000;
        suffixIndex++;
    }

    const roundedValue = Math.round(value * 10) / 10;
    return `${roundedValue}${suffixes[suffixIndex]}`;
}




/**
 * Returns a shortened version of a string if its length is greater than the specified limit.
 * @param text - The text to shorten.
 * @param len - The maximum length of the shortened text.
 * @returns The shortened text with ellipsis added to the end.
 * @throws If the 'text' argument is not a string, or the 'len' argument is not a positive integer.
 */
const shorten = (text: string, len: number): string => {
    if (typeof text !== "string") {
        throw new Error("Expected a string for 'text'");
    }
    if (typeof len !== "number" || len < 1) {
        throw new Error("Expected a positive integer for 'len'");
    }
    if (text.length <= len) return text;
    return `${text.substring(0, len).trim()}...`;
};

/**
 * Formats a hexadecimal color code string by adding a "#" prefix if it's missing,
 * and expanding short-form hex codes to long-form.
 *
 * @param hex - The input hexadecimal color code to be formatted.
 * @param alt - The default color code to use if `hex` is invalid. Default is "#000000".
 * @returns The formatted color code.
 * @throws If `hex` is not a string or `alt` is not a string.
 */
const formatHex = (hex: string, alt: string = "#000000"): string => {
    if (typeof hex !== "string") {
        throw new Error(`Expected a string value for 'hex', but received ${typeof hex}`);
    }

    if (typeof alt !== "string") {
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
 * @param hex - The input hexadecimal color code to be validated.
 * @returns `true` if `hex` is valid, `false` otherwise.
 * @throws If `hex` is not a string.
 */
const validateHex = (hex: string): boolean => {
    if (!hex || typeof hex !== "string") {
        throw new Error("Invalid hex value");
    }
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
};

/**
 * Reverses a string.
 * @param str - The string to reverse.
 * @returns The reversed string.
 * @throws Argument must be a string.
 */
const reverseString = (str: string): string => {
    if (typeof str !== "string") {
        throw new Error("Argument must be a string");
    }
    return str.split("").reverse().join("");
};

/**
 * Determines whether a string is a palindrome.
 * @param str - The string to check.
 * @returns True if the string is a palindrome, false otherwise.
 * @throws Argument must be a string.
 */
const isPalindrome = (str: string): boolean => {
    if (typeof str !== "string") {
        throw new Error("Argument must be a string");
    }
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

/**
 * Capitalizes the first letter of a string.
 * @param str - The string to be capitalized.
 * @returns The capitalized string.
 * @throws Will throw an error if 'str' is not a string.
 */
const capitalize = (str: string): string => {
    if (typeof str !== "string") {
        throw new Error("Invalid input. Argument must be a string");
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
};

export {
    abbrev,
    shorten,
    formatHex,
    validateHex,
    reverseString,
    isPalindrome,
    capitalize,
};
