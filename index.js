const time = require('./src/tims');
const format = require('./src/format');
const utils = require('./src/utils');
const canvas = require('./src/canvas');

// Import all modules in the 'src' directory
// Export each module's functions
module.exports = {
    time,
    format,
    utils,
    canvas,
}
