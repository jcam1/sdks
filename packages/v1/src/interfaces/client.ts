import {
  PrivateKeyAccount,
  WalletClient,
} from 'viem';

import { Address } from '../../../core/src';

export interface ISdkClient {
  createPrivateKeyAccount(): PrivateKeyAccount;

  createLocalClient(params: {
    account: Address | PrivateKeyAccount,
  }): WalletClient;
}
