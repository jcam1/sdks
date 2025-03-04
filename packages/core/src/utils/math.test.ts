import { Uint256 } from 'soltypes';

import { toUint256, removeDecimals, restoreDecimals } from './math';

describe('Unit tests of toUint256()', () => {
  test('converts bigint to uint256 value', () => {
    const res = toUint256(123456789n);
    expect(res).toBeInstanceOf(Uint256);
    expect(res.toString()).toStrictEqual('123456789');
  });
});

describe('Unit tests of removeDecimals()', () => {
  test('removes decimal places from a decimal', () => {
    const res = removeDecimals(0.01);
    expect(res).toBeInstanceOf(Uint256);
    expect(res.toString()).toStrictEqual('10000000000000000');
  });

  test('removes decimal places from an integer (no decimal places)', () => {
    const res = removeDecimals(100);
    expect(res).toBeInstanceOf(Uint256);
    expect(res.toString()).toStrictEqual('100000000000000000000');
  });
});

describe('Unit tests of restoreDecimals()', () => {
  test('restores decimal places to bigint', () => {
    const res = restoreDecimals(Uint256.from('100'));
    expect(typeof res).toBe('number');
    expect(res).toStrictEqual(0.0000000000000001);
  });
});
