const { expect } = require('chai');
const arrays = require('../src/arrays');

describe('shuffle', () => {
    it('should shuffle an array', () => {
        const input = [1, 2, 3, 4, 5];
        const output = arrays.shuffle(input);
        expect(output).to.not.deep.equal(input);
    });

    it('should throw an error if input is not an array', () => {
        expect(() => arrays.shuffle('not an array')).to.throw('Invalid input. Argument must be an array');
    });
});


describe('includesArray', () => {
    it('returns true when array2 includes an item from array1', () => {
        const array1 = [1, 2, 3];
        const array2 = [3, 4, 5];
        const result = arrays.includesArray(array1, array2);
        expect(result).to.be.true;
    });

    it('returns false when array2 does not include an item from array1', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const result = arrays.includesArray(array1, array2);
        expect(result).to.be.false;
    });

    it('throws a TypeError if either parameter is not an array', () => {
        expect(() => arrays.includesArray('not an array', [1, 2, 3])).to.throw(TypeError);
        expect(() => arrays.includesArray([1, 2, 3], 'not an array')).to.throw(TypeError);
    });
});


describe("chunkArray", () => {
    it("should split an array into chunks of a specified size", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const size = 3;
        const expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        expect(arrays.chunkArray(arr, size)).to.deep.equal(expected);
    });

    it("should handle an empty array", () => {
        const arr = [];
        const size = 3;
        expect(arrays.chunkArray(arr, size)).to.deep.equal([]);
    });

    it("should handle a size greater than the array length", () => {
        const arr = [1, 2, 3];
        const size = 5;
        const expected = [[1, 2, 3]];
        expect(arrays.chunkArray(arr, size)).to.deep.equal(expected);
    });
});

describe('unique', () => {
    it('should remove duplicates from an array', () => {
        const input = [1, 2, 3, 2, 4, 2, 5];
        const output = arrays.unique(input);
        expect(output).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should throw an error if input is not an array', () => {
        expect(() => arrays.unique('not an array')).to.throw('Argument must be an array');
    });
});



describe('extract', () => {
    it('should extract the values of a specified key from an array of objects', () => {
        const arr = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 40 }, { name: 'Charlie', age: 50 }];
        const result = arrays.extract(arr, 'name');
        expect(result).to.be.an('array');
        expect(result).to.have.lengthOf(3);
        expect(result).to.deep.equal(['Alice', 'Bob', 'Charlie']);
    });

    it('should throw an error if the array is empty or undefined', () => {
        expect(() => arrays.extract(undefined, 'name')).to.throw('Array is empty or undefined');
        expect(() => arrays.extract([], 'name')).to.throw('Array is empty or undefined');
    });

    it('should throw an error if the key is not a string or is an empty string', () => {
        expect(() => arrays.extract([{ name: 'Alice' }], 123)).to.throw('Key is not a string or is an empty string');
        expect(() => arrays.extract([{ name: 'Alice' }], '')).to.throw('Key is not a string or is an empty string');
    });
});

describe('countOccurrences', () => {
    it('should count the number of occurrences of a value in an array', () => {
        const input = [1, 2, 3, 2, 4, 2, 5];
        expect(utils.countOccurrences(input, 2)).to.equal(3);
    });

    it('should throw an error if input is not an array', () => {
        expect(() => utils.countOccurrences('not an array', 2)).to.throw('First argument must be an array');
    });
});