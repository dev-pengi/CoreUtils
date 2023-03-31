const { expect } = require('chai');
const math = require('../src/math');

describe('clamp', () => {
    it('should clamp a value between a minimum and maximum value', () => {
        expect(math.clamp(5, 1, 10)).to.equal(5);
        expect(math.clamp(0, 1, 10)).to.equal(1);
        expect(math.clamp(11, 1, 10)).to.equal(10);
    });

    it('should throw an error if value, min or max is not a number', () => {
        expect(() => math.clamp('not a number', 1, 10)).to.throw('Invalid input. Arguments must be numbers');
    });
});


describe('calculateProgress', () => {
    it('returns the correct progress as a percentage', () => {
        const current = 50;
        const goal = 100;
        const result = math.calculateProgress(current, goal);
        expect(result).to.equal(0.5);
    });

    it('throws an error if current is not a positive number', () => {
        expect(() => math.calculateProgress(-50, 100)).to.throw(Error);
        expect(() => math.calculateProgress('not a number', 100)).to.throw(Error);
    });

    it('throws an error if goal is not a positive number greater than 0', () => {
        expect(() => math.calculateProgress(50, 0)).to.throw(Error);
        expect(() => math.calculateProgress(50, -100)).to.throw(Error);
        expect(() => math.calculateProgress(50, 'not a number')).to.throw(Error);
    });
});



describe("getAverage", () => {
    it('should throw an error if the argument is not an array', () => {
        expect(() => math.getAverage('foo')).to.throw('The argument must be an array.');
    });

    it('should throw an error if the array is empty', () => {
        expect(() => math.getAverage([])).to.throw('The array must contain at least one element.');
    });

    it("should return the correct average for an array of numbers", () => {
        const nums = [2, 4, 6, 8, 10];
        const result = math.getAverage(nums);
        expect(result).to.equal(6);
    });
});


describe("normalizeValues", () => {
    it("should throw an error if input is not an array", () => {
        expect(() => math.normalizeValues("not an array")).to.throw(
            "Input must be a non empty array of numbers"
        );
    });

    it("should throw an error if array is empty", () => {
        expect(() => math.normalizeValues([])).to.throw(
            "Input must be a non empty array of numbers"
        );
    });

    it("should throw an error if min is greater than or equal to max", () => {
        expect(() => math.normalizeValues([1, 2, 3], 5, 4)).to.throw("Min must be less than max");
    });

    it("should normalize an array of numbers to a specified range", () => {
        const nums = [1, 2, 3, 4, 5];
        const result = math.normalizeValues(nums, 0, 1);
        expect(result).to.eql([0, 0.25, 0.5, 0.75, 1]);
    });
});
