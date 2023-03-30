const { expect } = require('chai');
const utils = require('../src/utils');

describe('shuffle', () => {
    it('should shuffle an array', () => {
        const input = [1, 2, 3, 4, 5];
        const output = utils.shuffle(input);
        expect(output).to.not.deep.equal(input);
    });

    it('should throw an error if input is not an array', () => {
        expect(() => utils.shuffle('not an array')).to.throw('Invalid input. Argument must be an array');
    });
});

describe('clamp', () => {
    it('should clamp a value between a minimum and maximum value', () => {
        expect(utils.clamp(5, 1, 10)).to.equal(5);
        expect(utils.clamp(0, 1, 10)).to.equal(1);
        expect(utils.clamp(11, 1, 10)).to.equal(10);
    });

    it('should throw an error if value, min or max is not a number', () => {
        expect(() => utils.clamp('not a number', 1, 10)).to.throw('Invalid input. Arguments must be numbers');
    });
});

describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
        expect(utils.capitalize('hello world')).to.equal('Hello world');
    });

    it('should throw an error if input is not a string', () => {
        expect(() => utils.capitalize(123)).to.throw('Invalid input. Argument must be a string');
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

describe('unique', () => {
    it('should remove duplicates from an array', () => {
        const input = [1, 2, 3, 2, 4, 2, 5];
        const output = utils.unique(input);
        expect(output).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should throw an error if input is not an array', () => {
        expect(() => utils.unique('not an array')).to.throw('Argument must be an array');
    });
});

describe('reverseString', () => {
    it('should reverse a string', () => {
        expect(utils.reverseString('hello world')).to.equal('dlrow olleh');
    });

    it('should throw an error if input is not a string', () => {
        expect(() => utils.reverseString(123)).to.throw('Argument must be a string');
    });
});

describe('isPalindrome', () => {
    it('should return true if a string is a palindrome', () => {
        expect(utils.isPalindrome('racecar')).to.be.true;
    });

    it('should return false if a string is not a palindrome', () => {
        expect(utils.isPalindrome('hello world')).to.be.false;
    });

    it('should ignore non-alphanumeric characters and case', () => {
        expect(utils.isPalindrome('A man, a plan, a canal: Panama')).to.be.true;
    });

    it('should ignore non-alphanumeric characters and case', () => {
        expect(utils.isPalindrome('A man, a plan, a canal: Panama')).to.be.true;
    });
    it('should return true if the input is a palindrome', () => {
        expect(utils.isPalindrome('racecar')).to.be.true;
    });
})


describe('randomInRange', () => {
    it('should generate a random number within the given range', () => {
        const result = utils.randomInRange(0, 10);
        expect(result).to.be.greaterThanOrEqual(0);
        expect(result).to.be.lessThanOrEqual(10);
    });

    it('should throw an error if the arguments are not numbers', () => {
        expect(() => utils.randomInRange('a', 'b')).to.throw('Both arguments must be numbers.');
    });

    it('should throw an error if the maximum value is not greater than the minimum value', () => {
        expect(() => utils.randomInRange(10, 0)).to.throw('The maximum value must be greater than the minimum value.');
    });
});

describe('arrayAverage', () => {
    it('should calculate the average value of an array of numbers', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = utils.arrayAverage(arr);
        expect(result).to.be.a('number');
        expect(result).to.equal(3);
    });

    it('should throw an error if the argument is not an array', () => {
        expect(() => utils.arrayAverage('foo')).to.throw('The argument must be an array.');
    });

    it('should throw an error if the array is empty', () => {
        expect(() => utils.arrayAverage([])).to.throw('The array must contain at least one element.');
    });
});

describe('extract', () => {
    it('should extract the values of a specified key from an array of objects', () => {
        const arr = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 40 }, { name: 'Charlie', age: 50 }];
        const result = utils.extract(arr, 'name');
        expect(result).to.be.an('array');
        expect(result).to.have.lengthOf(3);
        expect(result).to.deep.equal(['Alice', 'Bob', 'Charlie']);
    });

    it('should throw an error if the array is empty or undefined', () => {
        expect(() => utils.extract(undefined, 'name')).to.throw('Array is empty or undefined');
        expect(() => utils.extract([], 'name')).to.throw('Array is empty or undefined');
    });

    it('should throw an error if the key is not a string or is an empty string', () => {
        expect(() => utils.extract([{ name: 'Alice' }], 123)).to.throw('Key is not a string or is an empty string');
        expect(() => utils.extract([{ name: 'Alice' }], '')).to.throw('Key is not a string or is an empty string');
    });
});


describe("gamble", () => {
    it("should throw an error if percentage is less than 0", () => {
        expect(() => utils.gamble(-10)).to.throw("Invalid percentage value");
    });

    it("should throw an error if percentage is greater than 100", () => {
        expect(() => utils.gamble(110)).to.throw("Invalid percentage value");
    });

    it("should return true or false at a correct percentage / 100", () => {
        const result = utils.gamble(75);
        expect(result).to.be.oneOf([true, false]);
    });

    it("should return true if random value is equal to 100", () => {
        const result = utils.gamble(100);
        expect(result).to.be.oneOf([true, false]);
        expect(result).to.equal(true);
    });
    it("should return false if random value is equal to 0", () => {
        const result = utils.gamble(0);
        expect(result).to.be.oneOf([true, false]);
        expect(result).to.equal(false);
    });
});

describe("getAverage", () => {
    it("should throw an error if input is not an array", () => {
        expect(() => utils.getAverage("not an array")).to.throw(
            "Input must be a non-empty array of numbers"
        );
    });

    it("should throw an error if array is empty", () => {
        expect(() => utils.getAverage([])).to.throw(
            "Input must be a non-empty array of numbers"
        );
    });

    it("should return the correct average for an array of numbers", () => {
        const nums = [2, 4, 6, 8, 10];
        const result = utils.getAverage(nums);
        expect(result).to.equal(6);
    });
});

describe("normalizeValues", () => {
    it("should throw an error if input is not an array", () => {
        expect(() => utils.normalizeValues("not an array")).to.throw(
            "Input must be a non-empty array of numbers"
        );
    });

    it("should throw an error if array is empty", () => {
        expect(() => utils.normalizeValues([])).to.throw(
            "Input must be a non-empty array of numbers"
        );
    });

    it("should throw an error if min is greater than or equal to max", () => {
        expect(() => utils.normalizeValues([1, 2, 3], 5, 4)).to.throw("Min must be less than max");
    });

    it("should normalize an array of numbers to a specified range", () => {
        const nums = [1, 2, 3, 4, 5];
        const result = utils.normalizeValues(nums, 0, 1);
        expect(result).to.eql([0, 0.25, 0.5, 0.75, 1]);
    });
});

describe("getRandomItem", () => {
    it("should throw an error if input is not an array", () => {
        expect(() => utils.getRandomItem("not an array")).to.throw(
            "Input must be a non-empty array"
        );
    });

    it("should throw an error if array is empty", () => {
        expect(() => utils.getRandomItem([])).to.throw(
            "Input must be a non-empty array"
        );
    });

    it("should return a random item from the input array", () => {
        const arr = ["Alice", "Bob", "Charlie"];
        const result = utils.getRandomItem(arr);
        expect(result).to.be.oneOf(arr);
    });
});

describe("flattenObject", () => {
    it("should flatten an object with nested properties into a flat object with path keys", () => {
        const obj = {
            a: {
                b: 1,
                c: {
                    d: 2,
                },
            },
            e: 3,
        };
        const expected = {
            "a.b": 1,
            "a.c.d": 2,
            e: 3,
        };
        expect(utils.flattenObject(obj)).to.deep.equal(expected);
    });

    it("should handle an empty object", () => {
        const obj = {};
        expect(utils.flattenObject(obj)).to.deep.equal({});
    });

    it("should handle an object with non-nested properties", () => {
        const obj = {
            a: 1,
            b: 2,
        };
        const expected = {
            a: 1,
            b: 2,
        };
        expect(utils.flattenObject(obj)).to.deep.equal(expected);
    });

    it("should handle a null input", () => {
        const obj = null;
        expect(() => utils.flattenObject(obj)).to.throw("Cannot convert undefined or null to object");
    });

    it("should handle a non-object input", () => {
        const obj = "not an object";
        expect(() => utils.flattenObject(obj)).to.throw("Input must be an object");
    });
});

describe("chunkArray", () => {
    it("should split an array into chunks of a specified size", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const size = 3;
        const expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        expect(utils.chunkArray(arr, size)).to.deep.equal(expected);
    });

    it("should handle an empty array", () => {
        const arr = [];
        const size = 3;
        expect(utils.chunkArray(arr, size)).to.deep.equal([]);
    });

    it("should handle a size greater than the array length", () => {
        const arr = [1, 2, 3];
        const size = 5;
        const expected = [[1, 2, 3]];
        expect(utils.chunkArray(arr, size)).to.deep.equal(expected);
    });
});

describe('mergeObjects', () => {
    it('merges two objects correctly', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3 };
        const result = utils.mergeObjects(obj1, obj2);
        expect(result).to.deep.equal({ a: 1, b: 2, c: 3 });
    });

    it('merges more than two objects correctly', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const obj3 = { c: 3 };
        const result = utils.mergeObjects(obj1, obj2, obj3);
        expect(result).to.deep.equal({ a: 1, b: 2, c: 3 });
    });
});

describe('includesArray', () => {
    it('returns true when array2 includes an item from array1', () => {
        const array1 = [1, 2, 3];
        const array2 = [3, 4, 5];
        const result = utils.includesArray(array1, array2);
        expect(result).to.be.true;
    });

    it('returns false when array2 does not include an item from array1', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const result = utils.includesArray(array1, array2);
        expect(result).to.be.false;
    });

    it('throws a TypeError if either parameter is not an array', () => {
        expect(() => utils.includesArray('not an array', [1, 2, 3])).to.throw(TypeError);
        expect(() => utils.includesArray([1, 2, 3], 'not an array')).to.throw(TypeError);
    });
});

describe('calculateProgress', () => {
    it('returns the correct progress as a percentage', () => {
        const current = 50;
        const goal = 100;
        const result = utils.calculateProgress(current, goal);
        expect(result).to.equal(0.5);
    });

    it('throws an error if current is not a positive number', () => {
        expect(() => utils.calculateProgress(-50, 100)).to.throw(Error);
        expect(() => utils.calculateProgress('not a number', 100)).to.throw(Error);
    });

    it('throws an error if goal is not a positive number greater than 0', () => {
        expect(() => utils.calculateProgress(50, 0)).to.throw(Error);
        expect(() => utils.calculateProgress(50, -100)).to.throw(Error);
        expect(() => utils.calculateProgress(50, 'not a number')).to.throw(Error);
    });
});