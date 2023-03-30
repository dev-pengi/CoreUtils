const { abbrev, shorten, formatHex, validateHex } = require('../src/format');
const expect = require('chai').expect;

describe('abbrev', () => {
    it('should return "0" if input is falsy or NaN', () => {
        expect(abbrev(null)).to.equal('0');
        expect(abbrev(undefined)).to.equal('0');
        expect(abbrev(NaN)).to.equal('0');
    });

    it('should correctly abbreviate large numbers', () => {
        expect(abbrev(123)).to.equal('123');
        expect(abbrev(1234)).to.equal('1.2K');
        expect(abbrev(12345)).to.equal('12.3K');
        expect(abbrev(123456)).to.equal('123.5K');
        expect(abbrev(1234567)).to.equal('1.2M');
        expect(abbrev(12345678)).to.equal('12.3M');
        expect(abbrev(123456789)).to.equal('123.5M');
        expect(abbrev(1234567890)).to.equal('1.2B');
    });

    it('should correctly abbreviate string numbers', () => {
        expect(abbrev('123')).to.equal('123');
        expect(abbrev('1234')).to.equal('1.2K');
        expect(abbrev('12345')).to.equal('12.3K');
        expect(abbrev('123456')).to.equal('123.5K');
        expect(abbrev('1234567')).to.equal('1.2M');
        expect(abbrev('12345678')).to.equal('12.3M');
        expect(abbrev('123456789')).to.equal('123.5M');
        expect(abbrev('1234567890')).to.equal('1.2B');
    });
});

describe('shorten', () => {
    it('should throw an error if text is not a string', () => {
        expect(() => shorten(123, 10)).to.throw('Expected a string for \'text\'');
    });
    
    it("should throw an error if len is not a positive integer", () => {
        expect(() => shorten("text", "invalid")).to.throw("Expected a positive integer for 'len'");
        expect(() => shorten("text", 0)).to.throw("Expected a positive integer for 'len'");
        expect(() => shorten("text", -1)).to.throw("Expected a positive integer for 'len'");
    });

    it('should return the original text if it is shorter than len', () => {
        expect(shorten('Hello', 10)).to.equal('Hello');
        expect(shorten('Hello world', 11)).to.equal('Hello world');
    });

    it('should return a shortened text with ellipsis if it is longer than len', () => {
        expect(shorten('Hello world!', 5)).to.equal('Hello...');
        expect(shorten('The quick brown fox jumps over the lazy dog', 20)).to.equal('The quick brown fox...');
    });
});

describe('formatHex', () => {
    it('should throw an error if hex is not a string', () => {
        expect(() => formatHex(null)).to.throw(`Expected a string value for 'hex', but received object`);
        expect(() => formatHex(123)).to.throw(`Expected a string value for 'hex', but received number`);
    });

    it('should correctly format a valid hex code string', () => {
        expect(formatHex('fff')).to.equal('#ffffff');
        expect(formatHex('#ff0000')).to.equal('#ff0000');
        expect(formatHex('00ff00')).to.equal('#00ff00');
        expect(formatHex('FFA500')).to.equal('#FFA500');
        expect(formatHex('#008000')).to.equal('#008000');
        expect(formatHex('000')).to.equal('#000000');
    });

    it("should throw an error if the default color code is not a string", () => {
        expect(() => formatHex("#123456", 123)).to.throw("Expected a string value for 'alt', but received number");
    });

    it('should throw an error if the input hex code is not a string', () => {
        expect(() => formatHex(123)).to.throw(Error, 'Expected a string value for \'hex\', but received number');
    });

    it('should throw an error if the default color code is not a string', () => {
        expect(() => formatHex('#FFFFFF', 123)).to.throw(Error, 'Expected a string value for \'alt\', but received number');
    });
})
