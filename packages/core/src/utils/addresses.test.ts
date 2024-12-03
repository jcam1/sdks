import { isValidAddress } from './addresses';

describe('Unit tests of isValidAddress()', () => {
  test('returns true if given zero address', () => {
    const address = '0x0000000000000000000000000000000000000000';
    expect(isValidAddress({ address: address })).toStrictEqual(true);
  });

  test('returns true if given valid address', () => {
    const address = '0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB';
    expect(isValidAddress({ address: address })).toStrictEqual(true);
  });

  test('returns false if given invalid address', () => {
    const address = '0000000000000000000000000000000000000000';
    expect(isValidAddress({ address: address })).toStrictEqual(false);
  });
});
