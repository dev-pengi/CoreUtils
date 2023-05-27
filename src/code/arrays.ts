/**
 * Extracts the values of a specified key from an array of objects
 * @param arr - The array of objects to extract values from
 * @param key - The name of the key to extract values for
 * @returns An array with the extracted values
 * @throws If the array is empty or undefined, or if the key is not a string or is an empty string
 */
const extract = <T extends Record<string, any>, K extends keyof T>(
    arr: T[],
    key: K
): T[K][] => {
    if (!arr || arr.length === 0) {
        throw new Error("Array is empty or undefined");
    }
    if (typeof key !== "string" || key.trim().length === 0) {
        throw new Error("Key is not a string or is an empty string");
    }

    return arr.map((obj) => obj[key]);
};

/**
 * Counts the number of occurrences of a value in an array.
 * @param arr - The array to search for occurrences of 'val'.
 * @param val - The value to search for in the array.
 * @returns The number of occurrences of 'val' in 'arr'.
 * @throws Will throw an error if 'arr' is not an array.
 */
const countOccurrences = <T>(arr: T[], val: T): number => {
    if (!Array.isArray(arr)) {
        throw new Error("First argument must be an array");
    }
    return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
};

/**
 * Removes duplicates from an array.
 * @param arr - The array to remove duplicates from.
 * @returns A new array with duplicates removed.
 * @throws Argument must be an array.
 */
const unique = <T>(arr: T[]): T[] => {
    if (!Array.isArray(arr)) {
        throw new Error("Argument must be an array");
    }
    return [...new Set(arr)];
};

/**
 * Shuffles an array in place using the Fisher-Yates shuffle algorithm.
 * @param arr - The input array to be shuffled.
 * @returns The shuffled array.
 * @throws If `arr` is not an array.
 */
const shuffle = <T>(arr: T[]): T[] => {
    if (!Array.isArray(arr)) {
        throw new Error("Invalid input. Argument must be an array");
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
 * @param arr - The array to chunk.
 * @param size - The size of each chunk.
 * @returns An array of chunks.
 */
function chunk<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

/**
 * Checks if an array includes at least one item of another array.
 * @param array1 - The first array to check.
 * @param array2 - The second array to check.
 * @returns True if array2 includes at least one item from array1, false otherwise.
 * @throws TypeError - If either parameter is not an array.
 */
function includesArray<T>(array1: T[], array2: T[]): boolean {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new TypeError("Both parameters must be arrays.");
    }

    return array2.some((item) => array1.includes(item));
}

export {
    includesArray,
    chunk,
    shuffle,
    unique,
    countOccurrences,
    extract,
};
