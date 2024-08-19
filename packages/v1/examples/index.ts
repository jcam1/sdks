import { spender } from './constants';
import { IJPYC, ISdkClient, JPYC, SdkClient } from '../src';
import { ChainName, Endpoint, NetworkName } from '../../core';

/**
 * SDK SetUp
 */

// 1. Initialize an SdkClient instance
const sdkClient: ISdkClient = new SdkClient({
  chainName: process.env.CHAIN_NAME as ChainName,
  networkName: process.env.NETWORK_NAME as NetworkName,
  rpcEndpoint: process.env.RPC_ENDPOINT as Endpoint,
});

// 2. Generate an account
export const account = sdkClient.createPrivateKeyAccount({});

// 3. Generate local clients
const client = sdkClient.createLocalClient({
  account: account,
});

const clientSpender = sdkClient.createLocalClient({
  account: spender,
});

// 4. Initialize JPYC SDK instances
export const jpyc: IJPYC = new JPYC({
  client: client,
});

export const jpycSpender: IJPYC = new JPYC({
  client: clientSpender,
});
