
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
 * @param {string} [seperator=' ,'] - seperate between units
 * @returns {string} - The time string
 * @throws {Error} - If the input is not a number or is invalid
 */

const MsToString = (milliseconds, seperator = ', ') => {
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
        .join(seperator);

    return timeString;
};

/**
 * Get the milliseconds timestamp of the next day.
 * @param {number} [dayOffset=1] - The number of days to calculate the timestamp for.
 * @returns {number} - The milliseconds timestamp of the next day.
 */
function theNextDayOn(dayOffset = 1) {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + dayOffset);
    nextDay.setHours(0, 0, 0, 0);
    return nextDay.getTime();
}




module.exports = {
    StringToMs,
    MsToString,
    theNextDayOn,
}