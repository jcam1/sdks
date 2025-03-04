import { Uint256 } from 'soltypes';

const TOKEN_DECIMALS = 18;
const DECIMALS_QUANTIFIER = 10 ** TOKEN_DECIMALS;

/**
 * Converts bigint to uint256
 * @param value bigint value
 * @returns value as uint256
 */
export const toUint256 = (value: bigint): Uint256 => {
  return Uint256.from(value.toString());
};

/**
 * Removes decimal places to make sure that only integer values live on-chain.
 * e.g.)
 *        0.01 -> 10,000,000,000,000,000
 *        100  -> 100,000,000,000,000,000,000
 * @param value integer or decimal value
 * @returns value as uint256
 */
export const removeDecimals = (value: number): Uint256 => {
  return toUint256(BigInt(value * DECIMALS_QUANTIFIER));
};

/**
 * Restores decimal places (mainly for display purpose).
 * e.g.)
 *        10,000,000,000,000,000 -> 0.01
 *        100,000,000,000,000,000,000 -> 100
 * @param value uint256 value
 * @returns value as number (i.e., integer or decimal)
 */
export const restoreDecimals = (value: Uint256): number => {
  return Number(value.toString()) / DECIMALS_QUANTIFIER;
};
