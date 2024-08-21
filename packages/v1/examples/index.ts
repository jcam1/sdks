import { ChainName, Endpoint, NetworkName } from '@jpyc/sdk-core';
import { IJPYC, ISdkClient, JPYC, SdkClient } from '@jpyc/sdk-v1';
import { HARDHAT_PREDEFINED_ADDRESSES } from './constants';

/**
 * SDK SetUp
 */

// 1. Initialize an SdkClient instance
const sdkClient: ISdkClient = new SdkClient({
  chainName: process.env.CHAIN_NAME as ChainName,
  networkName: process.env.NETWORK_NAME as NetworkName,
  rpcEndpoint: process.env.RPC_ENDPOINT as Endpoint,
});

// 2. Generate accounts
export const account = sdkClient.createPrivateKeyAccount({});
export const receiver = HARDHAT_PREDEFINED_ADDRESSES[0];
export const spender = HARDHAT_PREDEFINED_ADDRESSES[1];

// 3. Generate local clients
export const client = sdkClient.createLocalClient({
  account: account,
});
export const clientReceiver = sdkClient.createLocalClient({
  account: receiver,
});
export const clientSpender = sdkClient.createLocalClient({
  account: spender,
});

// 4. Initialize JPYC SDK instances
export const jpyc: IJPYC = new JPYC({
  client: client,
});
export const jpycReceiver: IJPYC = new JPYC({
  client: clientReceiver,
});
export const jpycSpender: IJPYC = new JPYC({
  client: clientSpender,
});
