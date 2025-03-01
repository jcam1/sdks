import { Uint256 } from 'soltypes';

const TOKEN_DECIMALS = 18;
const DECIMALS_QUANTIFIER = 10 ** TOKEN_DECIMALS;

export const toUint256 = (value: bigint): Uint256 => {
  return Uint256.from(value.toString());
};

export const removeDecimals = (value: number): Uint256 => {
  return toUint256(BigInt(value * DECIMALS_QUANTIFIER));
};

export const addDecimals = (value: Uint256): number => {
  return Number(value.toString()) / DECIMALS_QUANTIFIER;
};
