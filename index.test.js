const assert = require('assert');
const mocha = require('mocha');
const npmPackage = require('./index');

describe('npm-package', function () {
  describe('canvas', function () {
    it('should have circle, round, and drawRect functions', function () {
      assert.ok(npmPackage.canvas.circle);
      assert.ok(npmPackage.canvas.round);
      assert.ok(npmPackage.canvas.drawRect);
    });
  });

  describe('format', function () {
    it('should have abbrev, shorten, formatHex, and validateHex functions', function () {
      assert.ok(npmPackage.format.abbrev);
      assert.ok(npmPackage.format.shorten);
      assert.ok(npmPackage.format.formatHex);
      assert.ok(npmPackage.format.validateHex);
    });

    it('should have capitalize, reverseString, and reverseString functions', function () {
      assert.ok(npmPackage.format.capitalize);
      assert.ok(npmPackage.format.reverseString);
      assert.ok(npmPackage.format.isPalindrome);
    });
  });


  describe('time', function () {
    it('should have StringToMs, MsToString, and theNextDayOn functions', function () {
      assert.ok(npmPackage.time.StringToMs);
      assert.ok(npmPackage.time.MsToString);
      assert.ok(npmPackage.time.theNextDayOn);
    });
  });

  describe('arrays', function () {
    it('should have unique, includesArray, extract, and chunkArray functions', function () {
      assert.ok(npmPackage.arrays.unique);
      assert.ok(npmPackage.arrays.includesArray);
      assert.ok(npmPackage.arrays.chunkArray);
      assert.ok(npmPackage.arrays.extract);
      assert.ok(npmPackage.arrays.shuffle);
      assert.ok(npmPackage.arrays.countOccurrences);
    });
  })

  describe('math', function () {
    it('should have calculateProgress and clamp functions', function () {
      assert.ok(npmPackage.math.calculateProgress);
      assert.ok(npmPackage.math.clamp);
    });
    describe('math', function () {
      it('should have getAverageand normalizeValues functions', function () {
        assert.ok(npmPackage.math.getAverage);
        assert.ok(npmPackage.math.normalizeValues);
      });
    })
  })

  describe('random', function () {
    it('should have randomInRange, getRandomItem, and gamble functions', function () {
      assert.ok(npmPackage.random.randomInRange);
      assert.ok(npmPackage.random.getRandomItem);
      assert.ok(npmPackage.random.gamble);
    });
  })

  describe('objects', function () {
    it('should have flattenObject and mergeObjects functions', function () {
      assert.ok(npmPackage.objects.flattenObject);
      assert.ok(npmPackage.objects.mergeObjects);
    })
  })

});
