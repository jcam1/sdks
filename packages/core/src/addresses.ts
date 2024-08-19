import { isAddress } from 'viem';

import { Address } from './';

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const V2_PROXY_ADDRESS = '0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB';
export const LOCAL_PROXY_ADDRESS: Address = process.env.LOCAL_PROXY_ADDRESS as Address;

export function isValidAddress(params: {
  address: string,
}) {
  return isAddress(params.address, { strict: true });
}
