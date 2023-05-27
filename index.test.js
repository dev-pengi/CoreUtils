const assert = require('assert');
const npmPackage = require('./lib');

describe('npm-package', function () {
  describe('canvas', function () {
    it('should have circle, round, and drawRect functions', function () {
      assert.ok(npmPackage.circle);
      assert.ok(npmPackage.round);
      assert.ok(npmPackage.drawRect);
    });
  });

  describe('format', function () {
    it('should have abbrev, shorten, formatHex, and validateHex functions', function () {
      assert.ok(npmPackage.abbrev);
      assert.ok(npmPackage.shorten);
      assert.ok(npmPackage.formatHex);
      assert.ok(npmPackage.validateHex);
    });

    it('should have capitalize, reverseString, and reverseString functions', function () {
      assert.ok(npmPackage.capitalize);
      assert.ok(npmPackage.reverseString);
      assert.ok(npmPackage.isPalindrome);
    });
  });


  describe('time', function () {
    it('should have StringToMs, MsToString, and theNextDayOn functions', function () {
      assert.ok(npmPackage.StringToMs);
      assert.ok(npmPackage.MsToString);
      assert.ok(npmPackage.theNextDayOn);
    });
  });

  describe('arrays', function () {
    it('should have unique, includesArray, extract, and chunk functions', function () {
      assert.ok(npmPackage.unique);
      assert.ok(npmPackage.includesArray);
      assert.ok(npmPackage.chunk);
      assert.ok(npmPackage.extract);
      assert.ok(npmPackage.shuffle);
      assert.ok(npmPackage.countOccurrences);
    });
  })

  describe('math', function () {
    it('should have calculateProgress and clamp functions', function () {
      assert.ok(npmPackage.calculateProgress);
      assert.ok(npmPackage.clamp);
    });
    describe('math', function () {
      it('should have getAverageand normalizeValues functions', function () {
        assert.ok(npmPackage.getAverage);
        assert.ok(npmPackage.normalizeValues);
      });
    })
  })

  describe('random', function () {
    it('should have randomInRange, getRandomItem, and gamble functions', function () {
      assert.ok(npmPackage.randomInRange);
      assert.ok(npmPackage.getRandomItem);
      assert.ok(npmPackage.gamble);
    });
  })

  describe('objects', function () {
    it('should have flattenObject and mergeObjects functions', function () {
      assert.ok(npmPackage.flattenObject);
      assert.ok(npmPackage.mergeObjects);
    })
  })

});
