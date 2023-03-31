const { expect } = require('chai');
const random = require('../src/random');
 


describe('randomInRange', () => {
    it('should generate a random number within the given range', () => {
        const result = random.randomInRange(0, 10);
        expect(result).to.be.greaterThanOrEqual(0);
        expect(result).to.be.lessThanOrEqual(10);
    });

    it('should throw an error if the arguments are not numbers', () => {
        expect(() => random.randomInRange('a', 'b')).to.throw('Both arguments must be numbers.');
    });

    it('should throw an error if the maximum value is not greater than the minimum value', () => {
        expect(() => random.randomInRange(10, 0)).to.throw('The maximum value must be greater than the minimum value.');
    });
});




describe("gamble", () => {
    it("should throw an error if percentage is less than 0", () => {
        expect(() => random.gamble(-10)).to.throw("Invalid percentage value");
    });

    it("should throw an error if percentage is greater than 100", () => {
        expect(() => random.gamble(110)).to.throw("Invalid percentage value");
    });

    it("should return true or false at a correct percentage / 100", () => {
        const result = random.gamble(75);
        expect(result).to.be.oneOf([true, false]);
    });

    it("should return true if random value is equal to 100", () => {
        const result = random.gamble(100);
        expect(result).to.be.oneOf([true, false]);
        expect(result).to.equal(true);
    });
    it("should return false if random value is equal to 0", () => {
        const result = random.gamble(0);
        expect(result).to.be.oneOf([true, false]);
        expect(result).to.equal(false);
    });
});

describe("getRandomItem", () => {
    it("should throw an error if input is not an array", () => {
        expect(() => random.getRandomItem("not an array")).to.throw(
            "Input must be a non empty array"
        );
    });

    it("should throw an error if array is empty", () => {
        expect(() => random.getRandomItem([])).to.throw(
            "Input must be a non empty array"
        );
    });

    it("should return a random item from the input array", () => {
        const arr = ["Alice", "Bob", "Charlie"];
        const result = random.getRandomItem(arr);
        expect(result).to.be.oneOf(arr);
    });
});
