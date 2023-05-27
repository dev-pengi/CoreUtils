/**
 * Flattens an object with nested properties into a flat object with path keys
 * @param {object} obj - The object to flatten
 * @param {string} [prefix=""] - The prefix to use for the path keys
 * @returns {object} The flattened object
 * @throws {Error} If the input is not an object
 */
const flattenObject = (obj: object, prefix: string = ""): object => {
    if (typeof obj !== "object") {
        throw new Error("Input must be an object");
    }

    const result: any = {};

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
 * Merges two or more objects into a new object.
 *
 * @param {...Object} objects The objects to merge.
 * @returns {Object} The merged object.
 */
function mergeObjects<T extends object>(...objects: T[]): T {
    return objects.reduce((merged, obj) => {
        for (const [key, value] of Object.entries(obj)) {
            merged[key as keyof T] = value;
        }
        return merged;
    }, {} as T);
}


export {
    flattenObject,
    mergeObjects,
};
