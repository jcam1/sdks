import { Uint256, Uint8 } from 'soltypes';
import { Hash } from 'viem';

import { Address, Bytes32 } from '../utils';

export interface IJPYC {
  /**
   * View Functions
   */

  /**
   * Returns true if the given address is a minter.
   *
   * @param account - Account address
   * @returns true if minter, false otherwise
   */
  isMinter(params: { account: Address }): Promise<boolean>;

  /**
   * Returns allowance of a minter (for minting).
   *
   * @param minter - Minter address
   * @returns minter allowance
   */
  minterAllowance(params: { minter: Address }): Promise<number>;

  /**
   * Returns total supply of JPYC tokens.
   *
   * @returns total supply
   */
  totalSupply(): Promise<number>;

  /**
   * Returns balance of an account.
   *
   * @param account - Account address
   * @returns account balance
   */
  balanceOf(params: { account: Address }): Promise<number>;

  /**
   * Returns allowance of a spender over owner's tokens (for transferring).
   *
   * @param owner - Owner address
   * @param spender - Spender address
   * @returns spender allowance
   */
  allowance(params: { owner: Address; spender: Address }): Promise<number>;

  /**
   * Returns nonce for EIP2612's `permit`.
   *
   * @param owner - Owner address
   * @returns owner nonce
   */
  nonces(params: { owner: Address }): Promise<Uint256>;

  /**
   * Regular Functions
   */

  /**
   * Configures a minter.
   *
   * @param minter - Minter address
   * @param minterAllowedAmount - Minter allowance
   * @returns transaction hash
   */
  configureMinter(params: { minter: Address; minterAllowedAmount: number }): Promise<Hash>;

  /**
   * Mints tokens.
   *
   * @param to - Receiver address
   * @param amount - Amount of tokens to mint
   * @returns transaction hash
   */
  mint(params: { to: Address; amount: number }): Promise<Hash>;

  /**
   * Transfers tokens (directly).
   *
   * @param to - Receiver address
   * @param value - Amount of tokens to transfer
   * @returns transaction hash
   */
  transfer(params: { to: Address; value: number }): Promise<Hash>;

  /**
   * Transfers tokens (from spender).
   *
   * @param from - Owner address
   * @param to - Receiver address
   * @param value - Amount of tokens to transfer
   * @returns transaction hash
   */
  transferFrom(params: { from: Address; to: Address; value: number }): Promise<Hash>;

  /**
   * Transfers tokens with authorization.
   *
   * @param from - Owner address
   * @param to - Receiver address
   * @param value - Amount of tokens to transfer
   * @param validAfter - Unix time when transaction becomes valid
   * @param validBefore - Unix time when transaction becomes invalid
   * @param nonce - Unique nonce
   * @param v - v of ECDSA
   * @param r - r of ECDSA
   * @param s - s of ECDSA
   * @returns transaction hash
   */
  transferWithAuthorization(params: {
    from: Address;
    to: Address;
    value: number;
    validAfter: Uint256;
    validBefore: Uint256;
    nonce: Bytes32;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash>;

  /**
   * Receives tokens with authorization.
   *
   * @param from - Owner address
   * @param to - Receiver address
   * @param value - Amount of tokens to transfer
   * @param validAfter - Unix time when transaction becomes valid
   * @param validBefore - Unix time when transaction becomes invalid
   * @param nonce - Unique nonce
   * @param v - v of ECDSA
   * @param r - r of ECDSA
   * @param s - s of ECDSA
   * @returns transaction hash
   */
  receiveWithAuthorization(params: {
    from: Address;
    to: Address;
    value: number;
    validAfter: Uint256;
    validBefore: Uint256;
    nonce: Bytes32;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash>;

  /**
   * Cancels authorization.
   *
   * @param authorizer - Owner address
   * @param nonce - Unique nonce
   * @param v - v of ECDSA
   * @param r - r of ECDSA
   * @param s - s of ECDSA
   * @returns transaction hash
   */
  cancelAuthorization(params: {
    authorizer: Address;
    nonce: Bytes32;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash>;

  /**
   * Sets allowance of a spender over owner's tokens.
   *
   * @param spender - Spender address
   * @param value - Amount of allowance
   * @returns transaction hash
   */
  approve(params: { spender: Address; value: number }): Promise<Hash>;

  /**
   * Increases allowance.
   *
   * @param spender - Spender address
   * @param increment - Amount of allowance to increase
   * @returns transaction hash
   */
  increaseAllowance(params: { spender: Address; increment: number }): Promise<Hash>;

  /**
   * Decreases allowance.
   *
   * @param spender - Spender address
   * @param increment - Amount of allowance to decrease
   * @returns transaction hash
   */
  decreaseAllowance(params: { spender: Address; decrement: number }): Promise<Hash>;

  /**
   * Sets allowance of a spender over owner's tokens, given owner's signed approval.
   *
   * @param owner - Owner address
   * @param spender - Spender address
   * @param value - Amount of allowance
   * @param deadline - Unix time when transaction becomes invalid
   * @param v - v of ECDSA
   * @param r - r of ECDSA
   * @param s - s of ECDSA
   * @returns transaction hash
   */
  permit(params: {
    owner: Address;
    spender: Address;
    value: number;
    deadline: Uint256;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash>;
}
