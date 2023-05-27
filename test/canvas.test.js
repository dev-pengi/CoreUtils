const { createCanvas } = require('canvas');
const expect = require('chai').expect;
const { circle, drawRect, round } = require('../lib');

describe('circle', () => {
    it('should throw an error if canvas context is not provided', () => {
        expect(() => {
            circle();
        }).to.throw('Missing canvas context!');
    });

    it('should throw an error if invalid arguments are provided', () => {
        expect(() => {
            const canvas = createCanvas(200, 200);
            const ctx = canvas.getContext('2d');
            circle(ctx, 'x', 'y', 'width', 'height');
        }).to.throw('Expected arguments to be numbers, received string, string, string, string');
    });

    it('should draw a circular clip path on the canvas context', () => {
        const canvas = createCanvas(200, 200);
        const ctx = canvas.getContext('2d');
        const newCtx = circle(ctx, 100, 100, 100, 100);
        expect(ctx).to.deep.equal(newCtx);
    });
});

describe('drawRect', () => {
    it('should throw an error if canvas context is not provided', () => {
        expect(() => {
            drawRect();
        }).to.throw('Missing canvas context!');
    });

    it('should throw an error if invalid arguments are provided', () => {
        expect(() => {
            const canvas = createCanvas(200, 200);
            const ctx = canvas.getContext('2d');
            drawRect(ctx, 'x', 'y', 'height', 'width');
        }).to.throw('Expected x to be a number, received string!');
    });

    it('should draw a rectangle on the canvas context', () => {
        const canvas = createCanvas(200, 200);
        const ctx = canvas.getContext('2d');
        const newCtx = drawRect(ctx, 50, 50, 100, 100);
        expect(ctx).to.deep.equal(newCtx);
    });

    it('should stroke the rectangle if stroke=true', () => {
        const canvas = createCanvas(200, 200);
        const ctx = canvas.getContext('2d');
        const newCtx = drawRect(ctx, 50, 50, 100, 100, '#ff0000', true);
        expect(ctx).to.deep.equal(newCtx);
    });
});

describe('round', () => {
    it('should throw an error if canvas context is not provided', () => {
        expect(() => {
            round();
        }).to.throw('Missing canvas context!');
    });

    it('should throw an error if invalid arguments are provided', () => {
        expect(() => {
            const canvas = createCanvas(200, 200);
            const ctx = canvas.getContext('2d');
            round(ctx, 'x', 'y', 'width', 'height', 'radius');
        }).to.throw('Expected x to be a number, received string!');
    });

    it('should draw a rounded rectangle on the canvas context', () => {
        const canvas = createCanvas(200, 200);
        const ctx = canvas.getContext('2d');
        const newCtx = round(ctx, 50, 50, 100, 100, 5);
        expect(ctx).to.deep.equal(newCtx);
    });

    it('should use default radius of 5 if radius=true', () => {
        const canvas = createCanvas(200, 200);
        const ctx = canvas.getContext('2d');
        const newCtx = round(ctx, 50, 50, 100, 100, true);
        expect(ctx).to.deep.equal(newCtx);
    });
});
