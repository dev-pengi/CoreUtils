
/**
 * Draws a circular clip path on the canvas context.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw on.
 * @param {number} x - The x-coordinate of the center of the circle.
 * @param {number} y - The y-coordinate of the center of the circle.
 * @param {number} width - The width of the clipping region.
 * @param {number} height - The height of the clipping region.
 * @returns {CanvasRenderingContext2D} - The canvas context.
 * @throws {Error} Missing canvas context or invalid argument types.
 */
function circle(ctx, x, y, width, height) {
    if (!ctx) throw new Error("Missing canvas context!");
    if (typeof x !== "number" || typeof y !== "number" ||
        typeof width !== "number" || typeof height !== "number") {
        throw new Error(`Expected arguments to be numbers, received ${typeof x}, ${typeof y}, ${typeof width}, ${typeof height}`);
    }

    const radius = Math.min(width, height) / 2;
    ctx.beginPath();
    ctx.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.clip();
    return ctx;
}


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
    ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height);
    ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
    ctx.clip();

    return ctx;
};

module.exports = {
    circle,
    round,
    drawRect,
}