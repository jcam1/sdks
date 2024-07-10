import { SUPPORTED_CHAIN_IDS } from './chains';

type AddressMap = { [chainId: number]: string };

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
const V2_PROXY_ADDRESS = '0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB';

export const V2_ADDRESSES: AddressMap = SUPPORTED_CHAIN_IDS.reduce<AddressMap>(
  (addressMap, chainId) => {
    addressMap[chainId] = V2_PROXY_ADDRESS;
    return addressMap;
  },
  {},
);
