/**
 * Draws a circular clip path on the canvas context.
 *
 * @param ctx - The canvas rendering context to draw on.
 * @param x - The x-coordinate of the center of the circle.
 * @param y - The y-coordinate of the center of the circle.
 * @param width - The width of the clipping region.
 * @param height - The height of the clipping region.
 * @returns The canvas context.
 * @throws {Error} Missing canvas context or invalid argument types.
 */
function circle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number
): CanvasRenderingContext2D {
    if (!ctx) throw new Error("Missing canvas context!");
    if (
        typeof x !== "number" ||
        typeof y !== "number" ||
        typeof width !== "number" ||
        typeof height !== "number"
    ) {
        throw new Error(
            `Expected arguments to be numbers, received ${typeof x}, ${typeof y}, ${typeof width}, ${typeof height}`
        );
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
 * @param ctx - The canvas context to draw on.
 * @param x - The x-coordinate of the top-left corner of the rectangle.
 * @param y - The y-coordinate of the top-left corner of the rectangle.
 * @param height - The height of the rectangle.
 * @param width - The width of the rectangle.
 * @param color - The color to fill or stroke the rectangle. Default is "#000000".
 * @param stroke - Whether to stroke the rectangle instead of filling it. Default is false.
 * @param lineWidth - The width of the stroke, if stroke=true. Default is 1.
 * @returns The canvas context with the rectangle drawn on it.
 * @throws {Error} If the canvas context is missing or any of the parameters are not valid numbers.
 */
const drawRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    height: number,
    width: number,
    color = "#000000",
    stroke = false,
    lineWidth = 1
): CanvasRenderingContext2D => {
    if (!ctx) throw new Error("Missing canvas context!");
    if (isNaN(x)) throw new Error(`Expected x to be a number, received ${typeof x}!`);
    if (isNaN(y)) throw new Error(`Expected y to be a number, received ${typeof y}!`);
    if (isNaN(height)) throw new Error(`Expected height to be a number, received ${typeof height}!`);
    if (isNaN(width)) throw new Error(`Expected width to be a number, received ${typeof width}!`);

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
 * @param ctx - The canvas context to draw on.
 * @param x - The x-coordinate of the top-left corner of the rectangle.
 * @param y - The y-coordinate of the top-left corner of the rectangle.
 * @param width - The width of the rectangle.
 * @param height - The height of the rectangle.
 * @param radius - The radius of the corners, or true for a default radius of 5.
 * @returns The canvas context with the rounded rectangle drawn on it.
 * @throws {Error} If the canvas context is missing or any of the parameters are not valid numbers.
 */
const round = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number | boolean
): CanvasRenderingContext2D => {
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

export { circle, round, drawRect };
