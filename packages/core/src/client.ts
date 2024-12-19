import { createWalletClient, http, PrivateKeyAccount, publicActions, WalletClient } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

import { ISdkClient } from './interfaces';
import {
  Address,
  Bytes32,
  ChainName,
  Endpoint,
  getRpcEndpoint,
  InvalidChainNameError,
  InvalidNetworkNameError,
  isValidChainName,
  isValidNetworkName,
  NetworkName,
  SUPPORTED_CHAINS,
} from './utils';

export class SdkClient implements ISdkClient {
  private readonly chainName: ChainName;
  private readonly networkName: NetworkName;
  private readonly rpcEndpoint: Endpoint;
  private account: PrivateKeyAccount;
  private client: WalletClient;

  constructor(params: { chainName: ChainName; networkName: NetworkName; rpcEndpoint?: Endpoint }) {
    if (!isValidChainName({ chainName: params.chainName })) {
      throw new InvalidChainNameError(params.chainName);
    }
    if (!isValidNetworkName({ chainName: params.chainName, networkName: params.networkName })) {
      throw new InvalidNetworkNameError(params.chainName, params.networkName);
    }
    this.chainName = params.chainName;
    this.networkName = params.networkName;
    this.rpcEndpoint =
      params.rpcEndpoint ??
      getRpcEndpoint({ chainName: params.chainName, networkName: params.networkName });
  }

  createPrivateKeyAccount(params: { privateKey?: Bytes32 }): PrivateKeyAccount {
    this.account = privateKeyToAccount(params.privateKey ?? (process.env.PRIVATE_KEY as Bytes32));

    return this.account;
  }

  createClient(params: { account: Address | PrivateKeyAccount }): WalletClient {
    this.client = createWalletClient({
      account: params.account,
      chain: SUPPORTED_CHAINS[this.chainName][this.networkName],
      transport: http(this.rpcEndpoint),
    }).extend(publicActions);

    return this.client;
  }
}
