import {
  PrivateKeyAccount,
  WalletClient,
} from 'viem';

export interface ISdkClient {
  createPrivateKeyAccount(): PrivateKeyAccount;

  createLocalClient(params: {
    account: PrivateKeyAccount,
  }): WalletClient;
}
