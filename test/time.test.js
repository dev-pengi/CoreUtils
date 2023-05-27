const { expect } = require('chai');
// const moment = require('moment');
const { StringToMs, MsToString, theNextDayOn } = require('../lib');

describe('StringToMs', () => {
  it('should convert time string to milliseconds', () => {
    expect(StringToMs('30d')).to.equal(2592000000);
    expect(StringToMs('1d')).to.equal(86400000);
    expect(StringToMs('2h')).to.equal(7200000);
    expect(StringToMs('1m')).to.equal(60000);
    expect(StringToMs('30s')).to.equal(30000);
  });

  it('should throw an error if the provided time is not a valid number', () => {
    expect(() => StringToMs('not-a-number')).to.throw('The suffix must be: s, m, h, d, w, M, y');
    expect(() => StringToMs('')).to.throw('Time string can\'t be empty');
  });

  it('should throw an error if the suffix is not valid', () => {
    expect(() => StringToMs('1x')).to.throw('The suffix must be: s, m, h, d, w, M, y');
  });
});

describe('MsToString', () => {
  it('should convert milliseconds to human-readable time string', () => {
    expect(MsToString(2592000000)).to.equal('1mo');
    expect(MsToString(2592000000 * 3)).to.equal('3mo');
    expect(MsToString(2592000000 * 13)).to.equal('1y, 1mo');
    expect(MsToString(86400000)).to.equal('1d');
    expect(MsToString(7200000)).to.equal('2h');
    expect(MsToString(60000)).to.equal('1m');
    expect(MsToString(30000)).to.equal('30s');
  });

  it('should throw an error if the provided value is not a valid number', () => {
    expect(() => MsToString('not-a-number')).to.throw('The provided value is not a valid number');
  });
});

// describe('theNextDayOn', () => {
//   it('should return the milliseconds timestamp of the next day', () => {
//     const today = moment();
//     const tomorrow = today.clone().add(1, 'day').startOf('day');
//     expect(theNextDayOn()).to.equal(tomorrow.valueOf());
//   });

//   it('should return the milliseconds timestamp of the day after the provided offset', () => {
//     const today = moment();
//     const dayAfterTomorrow = today.clone().add(2, 'day').startOf('day');
//     expect(theNextDayOn(2)).to.equal(dayAfterTomorrow.valueOf());
//   });
// });
