import { Bytes32, Uint256, Uint8 } from 'soltypes';
import { Hash } from 'viem';

import { Address } from '../../../core/src';

export interface IJPYC {
  /**
   * View Functions
   */

  isMinter(params: {
    account: Address,
  }): Promise<boolean>;

  minterAllowance(params: {
    minter: Address,
  }): Promise<Uint256>;

  totalSupply(): Promise<Uint256>;

  balanceOf(params: {
    account: Address,
  }): Promise<Uint256>;

  allowance(params: {
    owner: Address,
    spender: Address,
  }): Promise<Uint256>;

  /**
   * Regular Functions
   */

  initialize(params: {
    tokenName: string,
    tokenSymbol: string,
    tokenCurrency: string,
    tokenDecimals: Uint8,
    newMinterAdmin: Address,
    newPauser: Address,
    newBlocklister: Address,
    newRescuer: Address,
    newOwner: Address,
  }): Promise<Hash>;

  configureMinter(params: {
    minter: Address,
    minterAllowedAmount: Uint256,
  }): Promise<Hash>;

  mint(params: {
    to: Address,
    amount: Uint256,
  }): Promise<Hash>;

  transfer(params: {
    to: Address,
    value: Uint256,
  }): Promise<Hash>;

  transferFrom(params: {
    from: Address,
    to: Address,
    value: Uint256,
  }): Promise<Hash>;

  transferWithAuthorization(params: {
    from: Address,
    to: Address,
    value: Uint256,
    validAfter: Uint256,
    validBefore: Uint256,
    nonce: Bytes32,
    v: Uint8,
    r: Bytes32,
    s: Bytes32,
  }): Promise<Hash>;

  receiveWithAuthorization(params: {
    from: Address,
    to: Address,
    value: Uint256,
    validAfter: Uint256,
    validBefore: Uint256,
    nonce: Bytes32,
    v: Uint8,
    r: Bytes32,
    s: Bytes32,
  }): Promise<Hash>;

  cancelAuthorization(params: {
    authorizer: Address,
    nonce: Bytes32,
    v: number,
    r: Bytes32,
    s: Bytes32,
  }): Promise<Hash>;

  approve(params: {
    spender: Address,
    value: Uint256,
  }): Promise<Hash>;

  increaseAllowance(params: {
    spender: Address,
    increment: Uint256,
  }): Promise<Hash>;

  decreaseAllowance(params: {
    spender: Address,
    decrement: Uint256,
  }): Promise<Hash>;

  permit(params: {
    owner: Address,
    spender: Address,
    value: Uint256,
    deadline: Uint256,
    v: Uint8,
    r: Bytes32,
    s: Bytes32,
  }): Promise<Hash>;
}
