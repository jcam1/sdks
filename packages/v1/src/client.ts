import {
  createWalletClient,
  http,
  PrivateKeyAccount,
  publicActions,
  WalletClient,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

import {
  Address,
  ChainName,
  Endpoint,
  NetworkName,
  SUPPORTED_CHAINS,
} from '../../core/src';
import { ISdkClient } from './';

export class SdkClient implements ISdkClient {
  private readonly chainName: ChainName;
  private readonly networkName: NetworkName;
  private readonly rpcEndpoint: Endpoint;
  private readonly testPrivateKey?: Address;
  private account: PrivateKeyAccount;
  private client: WalletClient;

  constructor(params: {
    chainName: ChainName,
    networkName: NetworkName,
    rpcEndpoint: Endpoint,
    testPrivateKey?: Address,
  }) {
    this.chainName = params.chainName;
    this.networkName = params.networkName;
    this.rpcEndpoint = params.rpcEndpoint;
    this.testPrivateKey = params.testPrivateKey;
  }

  createPrivateKeyAccount(): PrivateKeyAccount {
    this.account = privateKeyToAccount(
      this.testPrivateKey ?? process.env.PRIVATE_KEY as Address,
    );

    return this.account;
  }

  createLocalClient(params: {
    account: Address | PrivateKeyAccount,
  }): WalletClient {
    this.client = createWalletClient({
      account: params.account,
      chain: SUPPORTED_CHAINS[this.chainName][this.networkName],
      transport: http(this.rpcEndpoint),
    }).extend(publicActions);

    return this.client;
  }
}
