const { expect } = require('chai');
const objects = require('../src/objects');

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
        expect(objects.flattenObject(obj)).to.deep.equal(expected);
    });

    it("should handle an empty object", () => {
        const obj = {};
        expect(objects.flattenObject(obj)).to.deep.equal({});
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
        expect(objects.flattenObject(obj)).to.deep.equal(expected);
    });

    it("should handle a null input", () => {
        const obj = null;
        expect(() => objects.flattenObject(obj)).to.throw("Cannot convert undefined or null to object");
    });

    it("should handle a non-object input", () => {
        const obj = "not an object";
        expect(() => objects.flattenObject(obj)).to.throw("Input must be an object");
    });
});



describe('mergeObjects', () => {
    it('merges two objects correctly', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3 };
        const result = objects.mergeObjects(obj1, obj2);
        expect(result).to.deep.equal({ a: 1, b: 2, c: 3 });
    });

    it('merges more than two objects correctly', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const obj3 = { c: 3 };
        const result = objects.mergeObjects(obj1, obj2, obj3);
        expect(result).to.deep.equal({ a: 1, b: 2, c: 3 });
    });
});
