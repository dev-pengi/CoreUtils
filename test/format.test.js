const format = require('../src/format');
const expect = require('chai').expect;

describe('abbrev', () => {
    it('should return "0" if input is falsy or NaN', () => {
        expect(format.abbrev(null)).to.equal('0');
        expect(format.abbrev(undefined)).to.equal('0');
        expect(format.abbrev(NaN)).to.equal('0');
    });

    it('should correctly abbreviate large numbers', () => {
        expect(format.abbrev(123)).to.equal('123');
        expect(format.abbrev(1234)).to.equal('1.2K');
        expect(format.abbrev(12345)).to.equal('12.3K');
        expect(format.abbrev(123456)).to.equal('123.5K');
        expect(format.abbrev(1234567)).to.equal('1.2M');
        expect(format.abbrev(12345678)).to.equal('12.3M');
        expect(format.abbrev(123456789)).to.equal('123.5M');
        expect(format.abbrev(1234567890)).to.equal('1.2B');
    });

    it('should correctly abbreviate string numbers', () => {
        expect(format.abbrev('123')).to.equal('123');
        expect(format.abbrev('1234')).to.equal('1.2K');
        expect(format.abbrev('12345')).to.equal('12.3K');
        expect(format.abbrev('123456')).to.equal('123.5K');
        expect(format.abbrev('1234567')).to.equal('1.2M');
        expect(format.abbrev('12345678')).to.equal('12.3M');
        expect(format.abbrev('123456789')).to.equal('123.5M');
        expect(format.abbrev('1234567890')).to.equal('1.2B');
    });
});

describe('shorten', () => {
    it('should throw an error if text is not a string', () => {
        expect(() => format.shorten(123, 10)).to.throw('Expected a string for \'text\'');
    });

    it("should throw an error if len is not a positive integer", () => {
        expect(() => format.shorten("text", "invalid")).to.throw("Expected a positive integer for 'len'");
        expect(() => format.shorten("text", 0)).to.throw("Expected a positive integer for 'len'");
        expect(() => format.shorten("text", -1)).to.throw("Expected a positive integer for 'len'");
    });

    it('should return the original text if it is shorter than len', () => {
        expect(format.shorten('Hello', 10)).to.equal('Hello');
        expect(format.shorten('Hello world', 11)).to.equal('Hello world');
    });

    it('should return a shortened text with ellipsis if it is longer than len', () => {
        expect(format.shorten('Hello world!', 5)).to.equal('Hello...');
        expect(format.shorten('The quick brown fox jumps over the lazy dog', 20)).to.equal('The quick brown fox...');
    });
});

describe('formatHex', () => {
    it('should throw an error if hex is not a string', () => {
        expect(() => format.formatHex(null)).to.throw(`Expected a string value for 'hex', but received object`);
        expect(() => format.formatHex(123)).to.throw(`Expected a string value for 'hex', but received number`);
    });

    it('should correctly format a valid hex code string', () => {
        expect(format.formatHex('fff')).to.equal('#ffffff');
        expect(format.formatHex('#ff0000')).to.equal('#ff0000');
        expect(format.formatHex('00ff00')).to.equal('#00ff00');
        expect(format.formatHex('FFA500')).to.equal('#FFA500');
        expect(format.formatHex('#008000')).to.equal('#008000');
        expect(format.formatHex('000')).to.equal('#000000');
    });

    it("should throw an error if the default color code is not a string", () => {
        expect(() => format.formatHex("#123456", 123)).to.throw("Expected a string value for 'alt', but received number");
    });

    it('should throw an error if the input hex code is not a string', () => {
        expect(() => format.formatHex(123)).to.throw(Error, 'Expected a string value for \'hex\', but received number');
    });

    it('should throw an error if the default color code is not a string', () => {
        expect(() => format.formatHex('#FFFFFF', 123)).to.throw(Error, 'Expected a string value for \'alt\', but received number');
    });
})

describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
        expect(format.capitalize('hello world')).to.equal('Hello world');
    });

    it('should throw an error if input is not a string', () => {
        expect(() => format.capitalize(123)).to.throw('Invalid input. Argument must be a string');
    });
});


describe('isPalindrome', () => {
    it('should return true if a string is a palindrome', () => {
        expect(format.isPalindrome('racecar')).to.be.true;
    });

    it('should return false if a string is not a palindrome', () => {
        expect(format.isPalindrome('hello world')).to.be.false;
    });

    it('should ignore non-alphanumeric characters and case', () => {
        expect(format.isPalindrome('A man, a plan, a canal: Panama')).to.be.true;
    });

    it('should ignore non-alphanumeric characters and case', () => {
        expect(format.isPalindrome('A man, a plan, a canal: Panama')).to.be.true;
    });
    it('should return true if the input is a palindrome', () => {
        expect(format.isPalindrome('racecar')).to.be.true;
    });
})


describe('reverseString', () => {
    it('should reverse a string', () => {
        expect(format.reverseString('hello world')).to.equal('dlrow olleh');
    });

    it('should throw an error if input is not a string', () => {
        expect(() => format.reverseString(123)).to.throw('Argument must be a string');
    });
});