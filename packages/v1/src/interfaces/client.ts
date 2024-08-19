import {
  PrivateKeyAccount,
  WalletClient,
} from 'viem';

import { Address } from '../../../core';

export interface ISdkClient {
  /**
   * Creates an account from a private key.
   *
   * @param privateKey - Private key
   * @returns PrivateKeyAccount
   */
  createPrivateKeyAccount(params: {
    privateKey?: Address,
  }): PrivateKeyAccount;

  /**
   * Creates a client from an account.
   *
   * @param account - Account
   * @returns WalletClient
   */
  createLocalClient(params: {
    account: Address | PrivateKeyAccount,
  }): WalletClient;
}
