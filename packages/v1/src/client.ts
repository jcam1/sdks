import { createWalletClient, http, PrivateKeyAccount, publicActions, WalletClient } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

import {
  Address,
  ChainName,
  Endpoint,
  isValidChainName,
  isValidNetworkName,
  NetworkName,
  SUPPORTED_CHAINS,
} from '../../core';
import { ISdkClient, InvalidChainNameError, InvalidNetworkNameError } from './';

export class SdkClient implements ISdkClient {
  private readonly chainName: ChainName;
  private readonly networkName: NetworkName;
  private readonly rpcEndpoint: Endpoint;
  private account: PrivateKeyAccount;
  private client: WalletClient;

  constructor(params: { chainName: ChainName; networkName: NetworkName; rpcEndpoint: Endpoint }) {
    if (!isValidChainName({ chainName: params.chainName })) {
      throw new InvalidChainNameError(params.chainName);
    }
    if (!isValidNetworkName({ chainName: params.chainName, networkName: params.networkName })) {
      throw new InvalidNetworkNameError(params.chainName, params.networkName);
    }
    this.chainName = params.chainName;
    this.networkName = params.networkName;
    this.rpcEndpoint = params.rpcEndpoint;
  }

  createPrivateKeyAccount(params: { privateKey?: Address }): PrivateKeyAccount {
    this.account = privateKeyToAccount(params.privateKey ?? (process.env.PRIVATE_KEY as Address));

    return this.account;
  }

  createLocalClient(params: { account: Address | PrivateKeyAccount }): WalletClient {
    this.client = createWalletClient({
      account: params.account,
      chain: SUPPORTED_CHAINS[this.chainName][this.networkName],
      transport: http(this.rpcEndpoint),
    }).extend(publicActions);

    return this.client;
  }
}
