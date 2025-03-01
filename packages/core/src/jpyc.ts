import { Uint256, Uint8 } from 'soltypes';
import { getContract, GetContractReturnType, Hash, WalletClient } from 'viem';

import { IJPYC, JPYC_V2_ABI } from './interfaces';
import {
  Address,
  addDecimals,
  Bytes32,
  InvalidAddressError,
  InvalidTransactionError,
  isValidAddress,
  LOCAL_PROXY_ADDRESS,
  removeDecimals,
  toUint256,
  V2_PROXY_ADDRESS,
} from './utils';

export class JPYC implements IJPYC {
  private readonly contractAddress: Address =
    process.env.SDK_ENV === 'local' ? LOCAL_PROXY_ADDRESS : V2_PROXY_ADDRESS;
  private readonly contractAbi: unknown[] = JPYC_V2_ABI;
  private readonly contract: GetContractReturnType<typeof this.contractAbi, WalletClient>;

  constructor(params: { client: WalletClient }) {
    if (!isValidAddress({ address: this.contractAddress })) {
      throw new InvalidAddressError(this.contractAddress);
    }
    this.contract = getContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      client: params.client,
    });
  }

  /**
   * View Functions
   */

  async isMinter(params: { account: Address }): Promise<boolean> {
    const resp = await this.contract.read.isMinter([params.account]);

    return resp as boolean;
  }

  async minterAllowance(params: { minter: Address }): Promise<number> {
    const resp = await this.contract.read.minterAllowance([params.minter]);

    return addDecimals(Uint256.from(resp as string));
  }

  async totalSupply(): Promise<number> {
    const resp = await this.contract.read.totalSupply();

    return addDecimals(Uint256.from(resp as string));
  }

  async balanceOf(params: { account: Address }): Promise<number> {
    const resp = await this.contract.read.balanceOf([params.account]);

    return addDecimals(Uint256.from(resp as string));
  }

  async allowance(params: { owner: Address; spender: Address }): Promise<number> {
    const resp = await this.contract.read.allowance([params.owner, params.spender]);

    return addDecimals(Uint256.from(resp as string));
  }

  async nonces(params: { owner: Address }): Promise<Uint256> {
    const resp = await this.contract.read.nonces([params.owner]);

    return toUint256(resp as bigint);
  }

  /**
   * Mutation Functions
   */

  async configureMinter(params: { minter: Address; minterAllowedAmount: number }): Promise<Hash> {
    const args = [params.minter, removeDecimals(params.minterAllowedAmount)];

    try {
      await this.contract.simulate.configureMinter(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.configureMinter(args);
  }

  async mint(params: { to: Address; amount: number }): Promise<Hash> {
    const args = [params.to, removeDecimals(params.amount)];

    try {
      await this.contract.simulate.mint(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.mint(args);
  }

  async transfer(params: { to: Address; value: number }): Promise<Hash> {
    const args = [params.to, removeDecimals(params.value)];

    try {
      await this.contract.simulate.transfer(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.transfer(args);
  }

  async transferFrom(params: { from: Address; to: Address; value: number }): Promise<Hash> {
    const args = [params.from, params.to, removeDecimals(params.value)];

    try {
      await this.contract.simulate.transferFrom(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.transferFrom(args);
  }

  async transferWithAuthorization(params: {
    from: Address;
    to: Address;
    value: number;
    validAfter: Uint256;
    validBefore: Uint256;
    nonce: Bytes32;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash> {
    const args = [
      params.from,
      params.to,
      removeDecimals(params.value),
      params.validAfter,
      params.validBefore,
      params.nonce,
      params.v,
      params.r,
      params.s,
    ];

    try {
      await this.contract.simulate.transferWithAuthorization(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.transferWithAuthorization(args);
  }

  async receiveWithAuthorization(params: {
    from: Address;
    to: Address;
    value: number;
    validAfter: Uint256;
    validBefore: Uint256;
    nonce: Bytes32;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash> {
    const args = [
      params.from,
      params.to,
      removeDecimals(params.value),
      params.validAfter,
      params.validBefore,
      params.nonce,
      params.v,
      params.r,
      params.s,
    ];

    try {
      await this.contract.simulate.receiveWithAuthorization(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.receiveWithAuthorization(args);
  }

  async cancelAuthorization(params: {
    authorizer: Address;
    nonce: Bytes32;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash> {
    const args = [params.authorizer, params.nonce, params.v, params.r, params.s];

    try {
      await this.contract.simulate.cancelAuthorization(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.cancelAuthorization(args);
  }

  async approve(params: { spender: Address; value: number }): Promise<Hash> {
    const args = [params.spender, removeDecimals(params.value)];

    try {
      await this.contract.simulate.approve(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.approve(args);
  }

  async increaseAllowance(params: { spender: Address; increment: number }): Promise<Hash> {
    const args = [params.spender, removeDecimals(params.increment)];

    try {
      await this.contract.simulate.increaseAllowance(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.increaseAllowance(args);
  }

  async decreaseAllowance(params: { spender: Address; decrement: number }): Promise<Hash> {
    const args = [params.spender, removeDecimals(params.decrement)];

    try {
      await this.contract.simulate.decreaseAllowance(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.decreaseAllowance(args);
  }

  async permit(params: {
    owner: Address;
    spender: Address;
    value: number;
    deadline: Uint256;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash> {
    const args = [
      params.owner,
      params.spender,
      removeDecimals(params.value),
      params.deadline,
      params.v,
      params.r,
      params.s,
    ];

    try {
      await this.contract.simulate.permit(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.permit(args);
  }
}
