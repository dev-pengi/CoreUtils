const assert = require('assert');
const mocha = require('mocha');
const npmPackage = require('./index');

describe('npm-package', function() {
  describe('canvas', function() {
    it('should have circle, round, and drawRect functions', function() {
      assert.ok(npmPackage.canvas.circle);
      assert.ok(npmPackage.canvas.round);
      assert.ok(npmPackage.canvas.drawRect);
    });
  });

  describe('format', function() {
    it('should have abbrev, shorten, formatHex, and validateHex functions', function() {
      assert.ok(npmPackage.format.abbrev);
      assert.ok(npmPackage.format.shorten);
      assert.ok(npmPackage.format.formatHex);
      assert.ok(npmPackage.format.validateHex);
    });
  });

  describe('time', function() {
    it('should have StringToMs, MsToString, and theNextDayOn functions', function() {
      assert.ok(npmPackage.time.StringToMs);
      assert.ok(npmPackage.time.MsToString);
      assert.ok(npmPackage.time.theNextDayOn);
    });
  });

  describe('utils', function() {
    it('should have shuffle, clamp, capitalize, and countOccurrences functions', function() {
      assert.ok(npmPackage.utils.shuffle);
      assert.ok(npmPackage.utils.clamp);
      assert.ok(npmPackage.utils.capitalize);
      assert.ok(npmPackage.utils.countOccurrences);
    });

    it('should have unique, reverseString, and isPalindrome functions', function() {
      assert.ok(npmPackage.utils.unique);
      assert.ok(npmPackage.utils.reverseString);
      assert.ok(npmPackage.utils.isPalindrome);
    });

    it('should have randomInRange, arrayAverage, and calculateProgress functions', function() {
      assert.ok(npmPackage.utils.randomInRange);
      assert.ok(npmPackage.utils.arrayAverage);
      assert.ok(npmPackage.utils.calculateProgress);
    });

    it('should have extract, getAverage, and normalizeValues functions', function() {
      assert.ok(npmPackage.utils.extract);
      assert.ok(npmPackage.utils.getAverage);
      assert.ok(npmPackage.utils.normalizeValues);
    });

    it('should have getRandomItem, flattenObject, and chunkArray functions', function() {
      assert.ok(npmPackage.utils.getRandomItem);
      assert.ok(npmPackage.utils.flattenObject);
      assert.ok(npmPackage.utils.chunkArray);
    });

    it('should have mergeObjects, includesArray, and gamble functions', function() {
      assert.ok(npmPackage.utils.mergeObjects);
      assert.ok(npmPackage.utils.includesArray);
      assert.ok(npmPackage.utils.gamble);
    });
  });
});
