import { PrivateKeyAccount, WalletClient } from 'viem';

import { Address, Bytes32 } from '../utils';

export interface ISdkClient {
  /**
   * Creates an account from a private key.
   *
   * @param privateKey - Private key
   * @returns PrivateKeyAccount
   */
  createPrivateKeyAccount(params: { privateKey?: Bytes32 }): PrivateKeyAccount;

  /**
   * Creates a client from an account.
   *
   * @param account - Account
   * @returns WalletClient
   */
  createClient(params: { account: Address | PrivateKeyAccount }): WalletClient;
}
