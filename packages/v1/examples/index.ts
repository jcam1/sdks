import {
  JPYC,
  SdkClient,
} from '../src';

// TODO: allow users to set constants dynamically
export const RECEIVER_ADDRESS = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
export const APPROVED_ADDRESS = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC';

/**
 * SDK SetUp
 */

// 1. Initialize SdkClient instances
// TODO: allow users to set parameters dynamically
const sdkClient = new SdkClient({
  chainName: 'local',
  networkName: 'mainnet',
  rpcEndpoint: 'http://127.0.0.1:8545/',
});

// 2. Generate accounts
export const account = sdkClient.createPrivateKeyAccount();

// 3. Generate local clients
const client = sdkClient.createLocalClient({
  account: account,
});

// 4. Initialize JPYC SDK instances
export const jpyc = new JPYC({
  client: client,
});
